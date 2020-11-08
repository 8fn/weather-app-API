// Export the geocode and forecast inside of the utils
const geocode = require('./utils/geocode');
const forecast = require('./forecast/utils/forecast');

// Requires an argument
const location = process.argv[2];

// Check if the argument is empty
if(!location){
    console.log('Please provide an location as argument');
}
else {


    // Callback function
    geocode(location, (error, data) => {
        if(error){
            // If there is an error
            return console.log('Error: ', error);
        }

        // Get the latitude and longitude in geocode as parameters
        forecast(data.latitude, data.longitude, (error, forecast_data) => {

            // Shows the locaton and the weather infos
            //console.log('Data: ', data);
            console.log(data.place_name);
            console.log(forecast_data);
        })
    })

}