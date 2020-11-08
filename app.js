// Export the geocode and forecast inside of the utils
const geocode = require('./utils/geocode');
const forecast = require('./forecast/utils/forecast');

// Requires an argument
const location = process.argv[2];

// Check if the argument is empty
if(!location){
    console.log('Please provide an location as argument');
}
// Callback function
geocode(location, (error, data) => {
    if(error){
        return console.log('Error: ', error);
    }

    forecast(data.latitude, data.longitude, (error, forecast_data) => {
        //console.log('Data: ', data);
        console.log(data.place_name);
        console.log(forecast_data);
    })
})