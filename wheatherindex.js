const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5&units=imperial&lang=en');
xhr.setRequestHeader('x-rapidapi-key', 'Sign Up for Key');
xhr.setRequestHeader('x-rapidapi-host', 'weatherbit-v1-mashape.p.rapidapi.com');

xhr.send(data);