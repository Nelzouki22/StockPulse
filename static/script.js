const symbolsInput=document.getElementById("symbols");
let language=localStorage.getItem("language")||'ar';
let chartMap={};
let lastPrices={};

function setLanguage(lang){
    language=lang;
    localStorage.setItem("language",lang);
    document.querySelectorAll('[data-ar]').forEach(el=>el.textContent=el.getAttribute(`data-${lang}`));
}
setLanguage(language);
if(localStorage.getItem("favoriteStocks")) symbolsInput.value=localStorage.getItem("favoriteStocks");

async function fetchStockPrices(){
    const symbols=symbolsInput.value;
    if(!symbols) return;
    localStorage.setItem("favoriteStocks",symbols);
    try{
        const response=await fetch("/get_prices",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({symbols})
        });
        const data=await response.json();
        updateUI(data);
    }catch(e){console.error(e);}
}

function updateUI(data){
    const tbody=document.querySelector("table tbody");
    const chartsContainer=document.getElementById("chartsContainer");
    tbody.innerHTML="";
    chartsContainer.innerHTML="";
    data.forEach(stock=>{
        const row=document.createElement("tr");
        row.classList.add("fade-update");
        if(stock.change>0) row.classList.add("positive");
        if(stock.change<0) row.classList.add("negative");
        row.innerHTML=`<td>${stock.symbol}</td><td>${stock.price||"-"}</td><td>${stock.change||"-"}</td><td>${stock.percent_change||"-"}</td><td class="error">${stock.error?'❌':'✅'}</td>`;
        tbody.appendChild(row);

        if(!stock.error){
            const colDiv=document.createElement("div");
            colDiv.classList.add("col");
            const canvas=document.createElement("canvas");
            canvas.id=`chart-${stock.symbol}`;
            colDiv.appendChild(canvas);
            chartsContainer.appendChild(colDiv);

            const ctx=canvas.getContext("2d");
            const history=stock.history||[];
            chartMap[stock.symbol]=new Chart(ctx,{
                type:'line',
                data:{
                    labels:history.map((_,i)=>i+1),
                    datasets:[{
                        label:`${stock.symbol} السعر`,
                        data:history,
                        borderColor:'blue',
                        backgroundColor:history.map((val,i)=>i>0?(val>history[i-1]?'rgba(0,255,0,0.2)':'rgba(255,0,0,0.2)'):'rgba(0,0,255,0.1)'),
                        tension:0.3,
                        fill:true
                    }]
                },
                options:{responsive:true, plugins:{tooltip:{enabled:true}}}
            });

            if(lastPrices[stock.symbol]){
                const diff=Math.abs((stock.price-lastPrices[stock.symbol])/lastPrices[stock.symbol]);
                if(diff>=0.01 && Notification.permission==="granted")
                    new Notification(`تغيير السهم ${stock.symbol}`,{body:`${stock.price} (${stock.change})`});
            }
            lastPrices[stock.symbol]=stock.price;
        }
    });
}

if(Notification.permission!=="granted") Notification.requestPermission();
setInterval(fetchStockPrices,5000);
symbolsInput.addEventListener("input",fetchStockPrices);
window.addEventListener("load",fetchStockPrices);
