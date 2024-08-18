require('dotenv').config()
const mongoose = require('mongoose');
// const mongoURL = 'mongodb://localhost:27017/hotels'
const mongoURL = process.env.KEY;
mongoose.connect(mongoURL)
const db = mongoose.connection;
console.log(process.env.KEY);
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