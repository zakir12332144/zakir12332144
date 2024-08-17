const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/hotels'
mongoose.connect(mongoURL)
const db = mongoose.connection;
db.on('connected', () => {
    console.log('connected to mongo db server succesfully');
})
db.on('error', (err) => {
    console.log('error in internal server', err);
})
db.on('disconnected', () => {
    console.log('mongodb disconnected');
})
module.exports = db;