const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// Get quote from API

async function getQuote() {
    const proxyUrl = 'https://jacinto-cors-proxy.herokuapp.com/';
    const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(proxyUrl + apiUrl);
        console.log(response);
        const data = await response.json();
        authorText.innerText= data.quoteAuthor;
        quoteText.innerText= data.quoteText;
    } catch (error) {

    }
}

// Event listeners
newQuoteBtn.addEventListener('click', getQuote);

// On Load
getQuote();