// Export the geocode inside of the utils
const geocode = require('./utils/geocode');

// Callback function
geocode('Porto', (error, data) => {
    console.log('Error: ', error);
    console.log('Data: ', data);
})