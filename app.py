from flask import Flask, render_template, request, jsonify
import requests
from flask import Flask, render_template, request, jsonify
import yfinance as yf
import time

app = Flask(__name__)

CACHE = {}
CACHE_EXPIRATION = 10
BATCH_SIZE = 5
REQUEST_DELAY = 1

def get_stock_data(symbol):
    current_time = time.time()
    if symbol in CACHE and current_time - CACHE[symbol]['timestamp'] < CACHE_EXPIRATION:
        return CACHE[symbol]['data']
    try:
        ticker = yf.Ticker(symbol)
        data = ticker.history(period="1d", interval="1m").tail(50)
        if data.empty:
            return {"symbol": symbol.upper(), "error": "بيانات غير موجودة"}
        latest = data.tail(1).iloc[0]
        price = float(latest['Close'])
        open_price = float(latest['Open'])
        change = price - open_price
        percent_change = (change / open_price) * 100
        history = [round(p,2) for p in data['Close'].tolist()]
        result = {
            "symbol": symbol.upper(),
            "price": round(price,2),
            "change": round(change,2),
            "percent_change": round(percent_change,2),
            "history": history
        }
        CACHE[symbol] = {"timestamp": current_time, "data": result}
        time.sleep(REQUEST_DELAY)
        return result
    except Exception as e:
        return {"symbol": symbol.upper(), "error": str(e)}

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/get_prices", methods=["POST"])
def get_prices():
    symbols_input = request.json.get("symbols", "")
    symbols = [s.strip() for s in symbols_input.split(",") if s.strip()]
    results = []
    for i in range(0, len(symbols), BATCH_SIZE):
        batch = symbols[i:i+BATCH_SIZE]
        for symbol in batch:
            results.append(get_stock_data(symbol))
    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)
