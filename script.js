
/*const tokenNames = [
    "BLUR",
    "bNEO",
    "BUSD",
    "USD",
    "ETH",
    "GMX",
    "STEVMOS",
    "LUNA",
    "RATOM",
    "STRD",
    "EVMOS",
    "IBCX",
    "IRIS",
    "ampLUNA",
    "KUJI",
    "STOSMO",
    "USDC",
    "axlUSDC",
    "ATOM",
    "STATOM",
    "OSMO",
    "rSWTH",
    "STLUNA",
    "LSI",
    "OKB",
    "OKT",
    "SWTH",
    "USC",
    "WBTC",
    "wstETH",
    "YieldUSD",
    "ZIL"
  ];

function populateDropdown(dropdownID){
    const dropdown = document.getElementById(dropdownID);

    dropdown.innerHTML = "";

    for(const tokenName of tokenNames){
        const option = document.createElement("option");
        option.value = tokenName;
        option.text = tokenName;
        dropdown.appendChild(option);
    }
}*/

const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

tokenNames.forEach((token)=>{
    const option = document.createElement("option");
    option.value = token;
    option.text = token;
    fromDropDown.add(option);
});


tokenNames.forEach((token)=>{
    const option = document.createElement("option");
    option.value = token;
    option.text = token;
    toDropDown.add(option);
});

window.onload = function(){
    let text = document.getElementById("text");
    let upper = document.getElementById("upper");
    let background = document.getElementById("background");
    let bottom = document.getElementById("lower");

    window.addEventListener('scroll', () => {
        let value = window.scrollY;

        text.style.marginTop = value * 2.5 + 'px';
        upper.style.top = value * -1.5 + 'px';
        bottom.style.marginTop = value * 1.5 + 'px';

    });

    /*document.addEventListener("DOMContentLoaded", function(){
        populateDropdown("from-currency-select");
        populateDropdown("to-currency-select");
    });*/

   
};