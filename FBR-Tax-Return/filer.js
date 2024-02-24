var userName, userCNIC;
var salary, taxSource, inFlows;
var rent, tax, vehicleMaintenance, travelling, electricity, water, gas, telephone, insurance, medical, education, gatherings, donation, houseExpenses;
var expenses, investmentAccount, preciousPossession, houseHold, personalItems, cash, otherAsset, assets, outFlows;
var PinvestmentAccount, PpreciousPossession, PhouseHold, PpersonalItems, Pcash, PotherAsset, Passets;
    
function calculate()
    {
    userName= document.getElementById("userName").value;
    userCNIC = document.getElementById("userCNIC").value;
    salary = +document.getElementById("salary").value;
    taxSource = +document.getElementById("taxSource").value;

    rent = +document.getElementById("rent").value;
    tax = +document.getElementById("tax").value;
    vehicleMaintenance = +document.getElementById("vehicleMaintenanace").value;
    travelling = +document.getElementById("travelling").value;
    electricity = +document.getElementById("electricity").value;
    water = +document.getElementById("water").value;
    gas = +document.getElementById("gas").value;
    telephone = +document.getElementById("telephone").value;
    insurance = +document.getElementById("insurance").value;
    medical = +document.getElementById("medical").value;
    education = +document.getElementById("education").value;
    gatherings = +document.getElementById("gatherings").value;
    donation = +document.getElementById("donation").value;
    houseExpenses = +document.getElementById("houseExpenses").value;

    expenses = rent + tax + vehicleMaintenance + travelling + electricity + water + gas + telephone + insurance + medical + education + gatherings + donation + houseExpenses;
    
    PinvestmentAccount = +document.getElementById("PinvestmentAccount").value;
    PpreciousPossession = +document.getElementById("PpreciousPossession").value;
    PhouseHold = +document.getElementById("PhouseHold").value;
    PpersonalItems = +document.getElementById("PpersonalItems").value;
    Pcash = +document.getElementById("Pcash").value;
    PotherAsset = +document.getElementById("PotherAsset").value;
    Passets = PinvestmentAccount + PpreciousPossession + PhouseHold + PpersonalItems + Pcash + PotherAsset;
    
    investmentAccount = +document.getElementById("investmentAccount").value;
    preciousPossession = +document.getElementById("preciousPossession").value;
    houseHold = +document.getElementById("houseHold").value;
    personalItems = +document.getElementById("personalItems").value;
    cash = +document.getElementById("cash").value;
    otherAsset = +document.getElementById("otherAsset").value;
    assets = investmentAccount + preciousPossession + houseHold + personalItems + cash + otherAsset;

    inFlows = salary;
    outFlows = taxSource + expenses + assets;
    
    
    document.getElementById("assetsCurrent").value = Passets + assets;
    document.getElementById("assetsPrevious").value = Passets;
    document.getElementById("assetsChange").value = assets;
    document.getElementById("inFlows").value = inFlows;
    document.getElementById("outFlows").value = outFlows;
    document.getElementById("unreconciled").value = inFlows - outFlows;
    
    if(inFlows === outFlows)
      {
        alert("Congratulations! Amount is Reconciled.")
      }
    }

function printReport()
  {
  if(inFlows === outFlows && inFlows!== undefined)
  {
    const d = new Date();
    document.write("<h2>File Income Returns at FBR through IRIS (Page 1/2)</h2>");
    document.write("<p>Date & Time: "+d+"<br>");
    document.write("Name: "+userName+"<br>");
    document.write("CNIC: "+userCNIC+"</p>");
    
    document.write("<h3>Instructions:</h3>");
    document.write("<p>1. If not yet, make your account on FBR / IRIS website: ");
    document.write("<a href='https://iris.fbr.gov.pk/' target='blank'> https://iris.fbr.gov.pk/</a><br>");
    document.write("2. Log-in to your account.<br>");
    document.write("3. Select 'Salary Return for Individuals' in classic view (if asks).<br>");
    document.write("4. It will ask for tax period, enter as required.<br>");
    document.write("5. Enter data in columns as mentioned below, calculate, save and submit.</p>");
    
    document.write("<h2>Data to Enter</h2>");
    document.write("<p>Under head of <b><i>Employment -> Salary</i></b>, enter:</p>");
    document.write("<table border='1' style='border-collapse: collapse;'><tr><td><b>Description</b></td><td><b>Code</b></td><td><b>Total Amount</b></td></tr>");
    document.write("<tr><td>Pay, Wages or Other Remuneration (including Arrears of Salary)</td><td>1009</td><td>"+salary+"</td></tr></table>");
    
    document.write("<p>Under head of <b><i>Tax Chargeable / Payments -> Adjustable Tax</i></b>, enter:</p>");
    document.write("<table border='1' style='border-collapse: collapse;'><tr><td><b>Description</b></td><td><b>Code</b></td><td><b>Tax Collected / Deducted</b></td></tr>");
    document.write("<tr><td>Salary of Employees u/s 149</td><td>64020004</td><td>"+taxSource+"</td></tr></table>");
    
    document.write("<p>Under head of <b><i>116 - Wealth Statement -> Personal Expenses</i></b>, enter:</p>");
    document.write("<table border='1' style='border-collapse: collapse;'><tr><td><b>Description</b></td><td><b>Code</b></td><td><b>Amount</b></td></tr>");
    document.write("<tr><td>Rent</td><td>7051</td><td>"+rent+"</td></tr>");
    document.write("<tr><td>Tax</td><td>7052</td><td>"+tax+"</td></tr>");
    document.write("<tr><td>Vehicle Maintanance</td><td>7055</td><td>"+vehicleMaintenance+"</td></tr>");
    document.write("<tr><td>Travelling</td><td>7056</td><td>"+travelling+"</td></tr>");
    document.write("<tr><td>Electricity</td><td>7058</td><td>"+electricity+"</td></tr>");
    document.write("<tr><td>Water</td><td>7059</td><td>"+water+"</td></tr>");
    document.write("<tr><td>Gas</td><td>7060</td><td>"+gas+"</td></tr>");
    document.write("<tr><td>Telephone</td><td>7061</td><td>"+telephone+"</td></tr>");
    document.write("<tr><td>Asset Insurance / Security</td><td>7066</td><td>"+insurance+"</td></tr>");
    document.write("<tr><td>Medical</td><td>7070</td><td>"+medical+"</td></tr>");
    document.write("<tr><td>Educational</td><td>7071</td><td>"+education+"</td></tr>");
    document.write("<tr><td>Functions / Gatherings</td><td>7073</td><td>"+gatherings+"</td></tr>");
    document.write("<tr><td>Donation / Zakat</td><td>7076</td><td>"+donation+"</td></tr>");
    document.write("<tr><td>Other Personal / Household Expenses</td><td>7087</td><td>"+expenses+"</td></tr></table>");
    
    document.write("<div style='break-after:page'></div>");
    document.write("<h2>File Income Returns at FBR through IRIS (Page 2/2)</h2>");
    document.write("<p>Date & Time: "+d+"<br>");
    document.write("Name: "+userName+"<br>");
    document.write("CNIC: "+userCNIC+"</p>");
    
    document.write("<p>Under head of <b><i>116 - Wealth Statement -> Personal Assets / Liabilities</i></b>, enter:</p>");
    document.write("<table border='1' style='border-collapse: collapse;'><tr><td><b>Description</b></td><td><b>Code</b></td><td><b>Amount</b></td></tr>");
    document.write("<tr><td>Investment (Non-Business) (Account / Annuity etc.)</td><td>7006</td><td>"+investmentAccount+"</td></tr>");
    document.write("<tr><td colspan='3'><i>(Create a new entry as your Bank Account, with details)</td></tr>");
    document.write("<tr><td>Precious Possession</td><td>7009</td><td>"+preciousPossession+"</td></tr>");
    document.write("<tr><td colspan='3'><i>(Create a new entry as <b>Gold/Jewelry</b>)</td></tr>");
    document.write("<tr><td>Household Effect</td><td>7010</td><td>"+houseHold+"</td></tr>");
    document.write("<tr><td>Personal Item</td><td>7011</td><td>"+personalItems+"</td></tr>");
    document.write("<tr><td>Cash (Non-Business)</td><td>7012</td><td>"+cash+"</td></tr>");
    document.write("<tr><td>Any Other Asset</td><td>7013</td><td>"+otherAsset+"</td></tr>");
    document.write("<tr><td colspan='3'><i>(Create a new entry as <b>Prize Bonds</b>)</td></tr></table>");
    
    document.write("<p>Under head of <b><i>116 - Wealth Statement -> Reconcilation of Net Assets -> Inflows (7049)</i></b>, enter:</p>");
    document.write("<table border='1' style='border-collapse: collapse;'><tr><td><b>Description</b></td><td><b>Code</b></td><td><b>Amount</b></td></tr>");
    document.write("<tr><td>Income Declared as per Return for the year subject to Normal Tax</td><td>7031</td><td>"+salary+"</td></tr></table>");
  
    document.write("<br><hr>");
    document.write("<p>Now, Under head of <b><i>116 - Wealth Statement -> Reconcilation of Net Assets</i></b>, match following data:</p>");
    document.write("<table border='1' style='border-collapse: collapse;'><tr><td><b>Description</b></td><td><b>Code</b></td><td><b>Amount</b></td></tr>");
    document.write("<tr><td>Net Assets Current Year</td><td>703001</td><td>"+(Passets + assets)+"</td></tr>");
    document.write("<tr><td>Net Assets Previous Year</td><td>703002</td><td>"+Passets+"</td></tr>");
    document.write("<tr><td>Increase / Decrease in Assets</td><td>7031</td><td>"+assets+"</td></tr>");
    document.write("<tr><td>Inflows</td><td>7049</td><td>"+salary+"</td></tr>");
    document.write("<tr><td>OutFlows</td><td>7099</td><td>"+outFlows+"</td></tr>");
    document.write("<tr><td>Unreconciled Amount</td><td>703000</td><td>"+(inFlows-outFlows)+"</td></tr></table>");
    
    document.write("<br><br><br><p><b>Note:</b> In case of any problem or consultancy, please contact us. We are at your service.");
    document.write("<br>You can contact through e-mail: <a href='mailto:try_aun@hotmail.com' target='blank'>try_aun@hotmail.com</a></p>");
  
    window.print();
  }
  else
  {
    if(inFlows=== undefined)
      {
      alert("Please make entries!");
      }
    else
      {
      alert("Net Amount not Reconciled!");
      }
  }
  }