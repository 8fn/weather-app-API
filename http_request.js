const http = require('http');

const latitude = 40;
const longitude = -75;

const url = "http://api.openweathermap.org/data/2.5/weather?lat=" + encodeURIComponent(latitude) + "&lon=" + encodeURIComponent(longitude) + "&appid=bbed4b542f115ffbb662110104b1d7c0";

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
        console.log(chunk);    
    })

    response.on('end', () => {
        console.log(data);
    })
})

request.end();