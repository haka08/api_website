(function onLoad()
{
    setButtonFunctions();
    getJoke();
    getCurrencyExchangeRates();
})();

function setButtonFunctions()
{
    document.getElementById('buttonGetJoke').onclick = getJoke;
    document.getElementById('buttonCurrency').onclick = getCurrencyExchangeRates;
    };

// Chuck Norris jokes
async function getJoke()
{
    await fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
            "x-rapidapi-key": "c88a328b45msh8f0459e3787b74ap1cf115jsnba0c704d03a4",
            "accept": "application/json"
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log("Chuck Norris API object:");
        console.log(response);
        console.log("\n");

        // display data
        document.getElementById('joke').innerHTML = response.value;
        document.getElementById('jokeIcon').src = response.icon_url;
        document.getElementsByClassName('jokeTitle')[0].href = response.url;
    })
    .catch(err => {
        console.log(err);
    });
}

// Currency Exchange rates
async function getCurrencyExchangeRates()
{
    const from = document.getElementById('inputCurrencyFrom').value;
    const to = document.getElementById('inputCurrencyTo').value;
    await fetch("https://currency-exchange.p.rapidapi.com/exchange?q=1.0&from=" + from + "&to=" + to, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
            "x-rapidapi-key": "c88a328b45msh8f0459e3787b74ap1cf115jsnba0c704d03a4"
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log("Currency Exchange API object:");
        console.log(response);
        console.log("\n");

        // display data
        document.getElementById('currencyResult').innerHTML = 'Result: ' + response;
    })
    .catch(err => {
        console.log(err);
    });
}