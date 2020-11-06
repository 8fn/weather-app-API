const request = require('request');

const geocode = (address, callback) => {

    // URL

    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoidGFuamlsa2giLCJhIjoiY2tndHFyOWE5MGRuejJ0cGVwdDJoeDI2MCJ9.nj5r-FADF74RgNDmshu0pw&language=pt";

    // http request

    request({
        url: url,
        json: true,
    }, (error, response) => {
        if(error){
            // Se não conseguir fazer request
            callback('Não deu para conectar aos serviços! Verifique a conexcão da internet.', undefined);
        } else if(response.body.features.length === 0){
            callback('O lugar que introduziu não existe. Por favor verifique novamente se o nome do lugar está bem introduzido!', undefined);
        }
    })

}