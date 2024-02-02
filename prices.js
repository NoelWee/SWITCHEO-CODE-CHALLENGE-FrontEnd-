// tokenPrices.js
// for tokens with multiple entries, I took the most recent value
const tokenPrices = {
    "BLUR": 0.20811525423728813,
    "bNEO": 7.1282679,
    "BUSD": 0.9998782611186441,
    "USD": 1,
    "ETH": 1645.9337373737374,
    "GMX": 36.345114372881355,
    "STEVMOS": 0.07276706779661017,
    "LUNA": 0.40955638983050846,
    "RATOM": 10.250918915254237,
    "STRD": 0.7386553389830508,
    "EVMOS": 0.06246181355932203,
    "IBCX": 41.26811355932203,
    "IRIS": 0.0177095593220339,
    "ampLUNA": 0.49548589830508477,
    "KUJI": 0.675,
    "STOSMO": 0.431318,
    "USDC": 0.9998782611186441, 
    "axlUSDC": 0.989832,
    "ATOM": 7.186657333333334,
    "STATOM": 8.512162050847458,
    "OSMO": 0.3772974333333333,
    "rSWTH": 0.00408771,
    "STLUNA": 0.44232210169491526,
    "LSI": 67.69661525423729,
    "OKB": 42.97562059322034,
    "OKT": 13.561577966101694,
    "SWTH": 0.004039850455012084,
    "USC": 0.994,
    "WBTC": 26002.82202020202,
    "wstETH": 1872.2579742372882,
    "YieldUSD": 1.0290847966101695,
    "ZIL": 0.01651813559322034
  };
  
  function convertTokens() {
    const fromToken = document.getElementById("from-currency-select").value;
    const toToken = document.getElementById("to-currency-select").value;
    const amount = parseFloat(document.getElementById("amount").value);
  
    const fromTokenPrice = tokenPrices[fromToken];
    const toTokenPrice = tokenPrices[toToken];
  
    if (fromTokenPrice !== undefined && toTokenPrice !== undefined && !isNaN(amount)) {
      const result = (amount / fromTokenPrice) * toTokenPrice;
      document.getElementById("result").innerText = `Converted Amount: ${result.toFixed(6)} ${toToken}`;
    } else {
      document.getElementById("result").innerText = "Invalid input or token data not available.";
    }
  }
  
  document.getElementById("convert-button").addEventListener("click", convertTokens);
  