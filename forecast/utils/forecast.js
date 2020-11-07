const request = require('request');

const forecast = (latitude, longitude, callback) => {
    
    // URL
    // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    // http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=bbed4b542f115ffbb662110104b1d7c0

    const url = "http://api.openweathermap.org/data/2.5/weather?lat=" + encodeURIComponent(latitude) + "&lon=" + encodeURIComponent(longitude) + "&appid=bbed4b542f115ffbb662110104b1d7c0";

    // Http request
    request({
        url: url,
        json: true,
    }, (error, response) => {
        // Verify if there is an error
        if(error){
            callback('Cant connect to the services!', undefined);
        } else if(response.body.length === 0){
            callback('No matches found! Double check the it.', undefined);
        } else {
            callback('undefined', {
                place_name: response.body.name,
            })
        }
    })

}



module.exports = forecast