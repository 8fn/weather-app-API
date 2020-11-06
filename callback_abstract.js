const request = require('request');

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoidGFuamlsa2giLCJhIjoiY2tndHFyOWE5MGRuejJ0cGVwdDJoeDI2MCJ9.nj5r-FADF74RgNDmshu0pw&language=pt";

    request({
        url: url,
        json: true
    },

        (error, response) => {
            if (error) {
                // Handling the error
                callback('Unable to connect to location services!', undefined);
                // Verify if there is no results
            } else if (response.body.features.length === 0) {
                callback('Unable to find location. Try another search', undefined)
            } else {
                
                callback(undefined, {
                    latitde: response.body.features[2].center[0],
                    longitude: response.body.features[2].center[1],
                    city: response.body.features[2].place_name_pt,
                })

            }
        })
}
geocode('porto', (error, data) => {
    console.log('Error: ', error);
    console.log('Data: ', data)
})