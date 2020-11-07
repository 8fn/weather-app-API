const forecast = require('./utils/forecast');
forecast('41.15', '-8.61', (error, data) => {
    console.log('Error: ', error);
    console.log('Data: ', data);
})