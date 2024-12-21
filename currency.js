// const BASE_URL = "https://www.nrb.org.np/api/forex/v1/";

const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies/eur.json";
json = fetchJSON(`/currencies/{fromCurrency}`)
rate = json[fromCurrency][toCurrency];

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");

// for (code in countryList){
//     console.log(code, countryList[code]);
// }

for (let select of dropdowns){
    for (currCode in countryList){
        let newOpt = document.createElement("option")
        newOpt.innerText = currCode;
        newOpt.value = currCode;

        if(select.name ==="From" && currCode === "USD"){
            newOpt.selected = "selected";
        } else if(select.name ==="To" && currCode === "NPR"){
            newOpt.selected = "selected";
        }
        select.append(newOpt);
    }
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target)
    })
}

const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}


btn.addEventListener("click", ()=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal<1){
        amtVal = 1;
        amount.value = "1";
    }

    const URl = `BASE_URL/${fromCurr}`
})