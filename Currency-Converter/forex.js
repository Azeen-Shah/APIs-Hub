let output = document.getElementById("output");

var USD, EUR, JPY, GBP, CHF, CAD, AUD, SEK, NOK, DKK, NZD, SGD;
var HKD, KRW, CNY, MYR, THB, AED, SAR, QAR, KWD, PKR, INR;

fetch("https://open.er-api.com/v6/latest/USD")
     .then((response) => response.json())
     .then((data) => {
       Update = data.time_last_update_utc;
       USD = data.rates.USD;
       EUR = data.rates.EUR;
       JPY = data.rates.JPY;
       GBP = data.rates.GBP;
       CHF = data.rates.CHF;
       CAD = data.rates.CAD;
       AUD = data.rates.AUD;
       SEK = data.rates.SEK;
       NOK = data.rates.NOK;
       DKK = data.rates.DKK;
       NZD = data.rates.NZD;
       SGD = data.rates.SGD;
       HKD = data.rates.HKD;
       KRW = data.rates.KRW;
       CNY = data.rates.CNY;
       MYR = data.rates.MYR;
       THB = data.rates.THB;
       AED = data.rates.AED;
       SAR = data.rates.SAR;
       QAR = data.rates.QAR;
       KWD = data.rates.KWD;
       PKR = data.rates.PKR;
       INR = data.rates.INR;
     })

var currencyFrom, amountFrom, amountTo, currencyTo, rateFrom, rateTo, dollar;
function convertx()
  {
  currencyFrom = document.getElementById("currencyFrom").value;
  currencyTo = document.getElementById("currencyTo").value;
  amountFrom = document.getElementById("amountFrom").value;
  
  switch (currencyFrom)
  {
    case "USD": rateFrom = USD; break;
    case "EUR": rateFrom = EUR; break;
    case "JPY": rateFrom = JPY; break;
    case "GBP": rateFrom = GBP; break;
    case "CHF": rateFrom = CHF; break;
    case "CAD": rateFrom = CAD; break;
    case "AUD": rateFrom = AUD; break;
    case "SEK": rateFrom = SEK; break;
    case "NOK": rateFrom = NOK; break;
    case "DKK": rateFrom = DKK; break;
    case "NZD": rateFrom = NZD; break;
    case "SGD": rateFrom = SGD; break;
    case "HKD": rateFrom = HKD; break;
    case "KRW": rateFrom = KRW; break;
    case "CNY": rateFrom = CNY; break;
    case "MYR": rateFrom = MYR; break;
    case "THB": rateFrom = THB; break;
    case "AED": rateFrom = AED; break;
    case "SAR": rateFrom = SAR; break;
    case "QAR": rateFrom = QAR; break;
    case "KWD": rateFrom = KWD; break;
    case "PKR": rateFrom = PKR; break;
    case "INR": rateFrom = INR; break;
  }
    switch (currencyTo)
  {
    case "USD": rateTo = USD; break;
    case "EUR": rateTo = EUR; break;
    case "JPY": rateTo = JPY; break;
    case "GBP": rateTo = GBP; break;
    case "CHF": rateTo = CHF; break;
    case "CAD": rateTo = CAD; break;
    case "AUD": rateTo = AUD; break;
    case "SEK": rateTo = SEK; break;
    case "NOK": rateTo = NOK; break;
    case "DKK": rateTo = DKK; break;
    case "NZD": rateTo = NZD; break;
    case "SGD": rateTo = SGD; break;
    case "HKD": rateTo = HKD; break;
    case "KRW": rateTo = KRW; break;
    case "CNY": rateTo = CNY; break;
    case "MYR": rateTo = MYR; break;
    case "THB": rateTo = THB; break;
    case "AED": rateTo = AED; break;
    case "SAR": rateTo = SAR; break;
    case "QAR": rateTo = QAR; break;
    case "KWD": rateTo = KWD; break;
    case "PKR": rateTo = PKR; break;
    case "INR": rateTo = INR; break;
  }
  
  dollar = amountFrom / rateFrom;
  amountTo = rateTo * dollar;
  document.getElementById("amountTo").value = amountTo;
  }