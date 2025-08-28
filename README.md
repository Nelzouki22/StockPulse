# Stock Tracker PWA

> شبه تطبيق تداول احترافي لتتبع أسعار الأسهم مباشرة على المتصفح والهاتف.  
> A semi-professional stock trading-like app for tracking stock prices on browser and mobile.  
> Un'app simile a una piattaforma di trading professionale per monitorare i prezzi delle azioni su browser e mobile.

---

## العربية 🇸🇦

### المزايا الرئيسية
- تحديث تلقائي كل 5 ثوانٍ لأسعار الأسهم.
- إدخال عدة أسهم دفعة واحدة (مثال: `AAPL,MSFT,AMZN`).
- إشعارات فورية عند تغير السعر ≥1٪.
- رسومات حية لكل سهم باستخدام Chart.js مع تمييز الصعود/الهبوط باللون الأخضر/الأحمر.
- دعم كامل للغة العربية والإنجليزية مع تبديل وحفظ اللغة المفضلة.
- حفظ الأسهم المفضلة في LocalStorage.
- واجهة جذابة ومتجاوبة باستخدام Bootstrap 5.
- PWA: قابل للتثبيت على الهاتف والمتصفح.
- تخزين مؤقت ذكي لتجاوز حدود yfinance.
- تقسيم ذكي للدفعات عند إدخال عدد كبير من الأسهم لتجنب الحظر.
- رسم متعدد المحاور لكل سهم لإظهار الاتجاهات التاريخية بدقة.

### هيكلية المشروع
stock-tracker-pwa/
│
├─ app.py # الخادم الرئيسي باستخدام Flask
├─ requirements.txt # المكتبات المطلوبة
├─ templates/
│ └─ index.html # واجهة المستخدم
├─ static/
│ ├─ style.css # CSS مخصص
│ └─ script.js # JavaScript للتفاعل والتحديثات
├─ manifest.json # ملف PWA
└─ service-worker.js # خدمة الـ PWA للتخزين المؤقت والإشعارات

### طريقة التشغيل
1. استبدل الأسهم الافتراضية بالأسهم التي تريد تتبعها (مثال: `AAPL,MSFT,AMZN`).
2. شغّل الخادم:
   ```bash
   python app.py
   3.افتح المتصفح على:http://127.0.0.1:5000
يمكن تثبيت التطبيق على الهاتف أو المتصفح كـ PWA.

ملاحظات

التطبيق يستخدم yfinance API لجلب بيانات الأسهم.

يمكن تعديل إعدادات التحديث أو الإشعارات في script.js.

الرسوم البيانية والتغييرات يتم تحديثها تلقائيًا كل 5 ثوانٍ.

English 🇬🇧
Key Features

Auto-update stock prices every 5 seconds.

Input multiple stocks at once (example: AAPL,MSFT,AMZN).

Real-time notifications on price change ≥1%.

Live charts for each stock using Chart.js with green/red up/down highlights.

Full Arabic/English language support with toggle and saved preference.

Save favorite stocks in LocalStorage.

Responsive and attractive UI using Bootstrap 5.

PWA: Installable on mobile and desktop browsers.

Smart caching to avoid yfinance limits.

Intelligent batching for large number of stocks to avoid blocking.

Multi-axis charts for each stock showing historical trends accurately.

Project Structure

stock-tracker-pwa/
│
├─ app.py                  # Main server with Flask
├─ requirements.txt        # Required Python libraries
├─ templates/
│   └─ index.html          # User interface
├─ static/
│   ├─ style.css           # Custom CSS
│   └─ script.js           # JavaScript for interactivity
├─ manifest.json           # PWA manifest
└─ service-worker.js       # PWA service worker for caching & notifications
How to Run

Replace default stock symbols with your desired ones (example: AAPL,MSFT,AMZN).

Start the server:python app.py
Open browser at:http://127.0.0.1:5000
Install app on mobile or desktop browser as a PWA.

Notes

App uses yfinance API to fetch stock data.

Update frequency and notifications can be configured in script.js.

Charts and price changes refresh automatically every 5 seconds.

Italiano 🇮🇹
Caratteristiche principali

Aggiornamento automatico dei prezzi delle azioni ogni 5 secondi.

Inserimento di più azioni contemporaneamente (esempio: AAPL,MSFT,AMZN).

Notifiche in tempo reale per variazioni di prezzo ≥1%.

Grafici live per ogni azione con Chart.js evidenziando aumento/diminuzione in verde/rosso.

Supporto completo per lingua araba/inglese con cambio e salvataggio preferenze.

Salvataggio azioni preferite in LocalStorage.

Interfaccia responsive e attraente con Bootstrap 5.

PWA: installabile su dispositivi mobili e browser desktop.

Cache intelligente per evitare limiti di yfinance.

Suddivisione intelligente per grandi quantità di azioni per evitare blocchi.

Grafici multi-asse per ciascuna azione mostrando l’andamento storico accuratamente.

Struttura del progetto

stock-tracker-pwa/
│
├─ app.py                  # Server principale con Flask
├─ requirements.txt        # Librerie Python richieste
├─ templates/
│   └─ index.html          # Interfaccia utente
├─ static/
│   ├─ style.css           # CSS personalizzato
│   └─ script.js           # JavaScript per interattività
├─ manifest.json           # Manifest PWA
└─ service-worker.js       # Service worker PWA per cache e notifiche
Come eseguire

Sostituire i simboli azionari predefiniti con quelli desiderati (esempio: AAPL,MSFT,AMZN).

Avviare il server:python app.py
Aprire il browser su:http://127.0.0.1:5000
Installare l’app su mobile o browser desktop come PWA.

Note

L’app utilizza yfinance API per ottenere dati azionari.

Frequenza aggiornamenti e notifiche configurabili in script.js.

Grafici e prezzi si aggiornano automaticamente ogni 5 secondi.

© 2025 Nadir Elzouki – MIT License


