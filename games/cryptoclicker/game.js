// game.js
// CryptoClicker script
// by WifiRouter
// 2022


// vars
var balance = 0;
var idlespeed = 0;
var currencysymbol = "₿"
var currencystring = "Bitcoin";
var currency = "btc";

// setup
//   > hide unused divs
document.getElementById("savecodeinputdiv").style.display = 'none';
document.getElementById("savedataoutput").style.display = 'none';

// custom functions
//   > sleep, use in an async function with 'await sleep(ms);'
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Click button
function clicked() {
    var balanceind = document.getElementById('balance');
    balance = balance + 1;
    balanceind.innerHTML = balance;
}

// save button
function save() {
    var outputelement = document.getElementById('savecode');
    var decodedStringBtoA = balance + '|' + idlespeed + '|' + currency;
    var encodedStringBtoA = btoa(decodedStringBtoA);
    document.getElementById("savedataoutput").style.display = 'block';
    outputelement.value = encodedStringBtoA;
}

// load button
function load() {
    var loadbtn = document.getElementById('loadbutton');
    loadbtn.disabled = true;
    document.getElementById("savecodeinputdiv").style.display = 'block';
}

// cancel save code input
function cancelload() {
    var loadbtn = document.getElementById('loadbutton');
    loadbtn.disabled = false;
    document.getElementById("savecodeinputdiv").style.display = 'none';
}

// load save data
function loadfrominput() {
    console.log("");
    console.log(" -- DEBUG MODE IS ACTIVE --");
    console.log("");
    var input = document.getElementById('savecodeinput');
    cancelload();
    console.log("Input box has the following data: " + input.value)
    var encodedStringAtoB = input.value;
    var decodedStringAtoB = "null";
    try {
        decodedStringAtoB = atob(encodedStringAtoB)
    }
    catch {
        alert('Save code could not be decoded.');
        console.log("%cCould not decode base64 string!", "color: red");
        return;
    }
    console.log("No longer need contents of text box, resetting.");
    input.value = "";
    console.log("Decoded save file to: " + decodedStringAtoB);
    var savedata = decodedStringAtoB.split("|");
    console.log("Found the following data in the save code:");
    console.log("Balance: " + savedata[0]);
    console.log("Idle Speed: " + savedata[1]);
    console.log("Currency: " + savedata[2]);
    console.log("Overwriting current data with save code...");
    if (savedata[2] == "btc") {
        // currency is bitcoin
        currency = "btc";
        currencysymbol = "₿"
        currencystring = "Bitcoin";
        alert('Loaded save data successfuly.\nBalance: ' + savedata[0] + '\nIdle Speed: ' + savedata[1] + '\nCurrency: ' + currencystring + ' ' + currencysymbol + ' ' + '(btc)');
    } else {
        alert('Invalid save data.');
        console.log("%cDecoded string contained invalid data. Cannot continue.", "color: red");
        return;
    }
    balance = parseInt(savedata[0]);
    idlespeed = parseInt(savedata[1]);
    console.log("%cSuccessfully restored data.", "color: lime");
}

// buy something
function upgrade(idlespeedupgrade, cost) {
    if (balance < cost) {
        alert('Not enough ' + currencystring + '!');
        return;
    }
    var idlspeed = document.getElementById('idlespeedindicator');
    var balanceind = document.getElementById('balance');
    idlespeed = idlespeed + idlespeedupgrade;
    balance = balance - cost;
    // update counters right away
    balanceind.innerHTML = balance;
    idlspeed.innerHTML = idlespeed;
}

// Dark mode toggle
document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('darkmode');
    var content = document.getElementById('content');
    var balance = document.getElementById('balance');
    var upgrademenu = document.getElementById('upgrademenu');

    checkbox.checked = true;

    checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            document.body.style.backgroundColor = 'rgb(1, 4, 9)';
            content.style.setProperty('color', 'white');
            upgrademenu.style.borderColor = '#e5e5e5';
        } else {
            document.body.style.backgroundColor = 'white';
            content.style.setProperty('color', 'black');
            upgrademenu.style.borderColor = 'rgb(1, 4, 9)';
        }
    })
});

// prevent player from accidentally refreshing or closing tab without saving
window.onbeforeunload = function ()
{
    return "Are you sure you want to exit? All data will be lost!";
};

// infinite loop for idle speed and other stuff (MAKE SURE THIS IS LAST IN THE SCRIPT)
loop();
async function loop() {
    var balanceindicator = document.getElementById('balance');
    var idlespeedindicator = document.getElementById('idlespeedindicator');
    var currencystringindicator = document.getElementById('currencystring');
    var currencysymbolindicator = document.getElementById('currencysymbol');
    while (true) {
        balance = balance + idlespeed;
        balanceindicator.innerHTML = balance;
        idlespeedindicator.innerHTML = idlespeed;
        currencysymbolindicator.innerHTML = currencysymbol;
        currencystringindicator.innerHTML = currencystring;
        await sleep(1000);
    }
}
