const geocode = require('./utils/geocode');

geocode('Porto', (error, data) => {
    console.log('Error: ', error);
    console.log('Data: ', data);
})