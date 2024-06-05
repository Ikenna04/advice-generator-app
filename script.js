const num = document.getElementById('quote-num');
const quote = document.getElementById('quote');
const api_url = 'https://api.adviceslip.com/advice';

async function getQuote(url) {
	const response = await fetch(url);
	var data = await response.json();

	console.log(data);
	console.log(data.slip);
	console.log(data.slip.advice);
	console.log(data.slip.id);
	quote.innerHTML = data.slip.advice;
	num.innerHTML = data.slip.id;
}

getQuote(api_url);
