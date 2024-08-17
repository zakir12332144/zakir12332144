const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    work: {
        type:String,
        enum: ['waiter', 'chef', 'manager'],
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    mobile: {
        type:Number,
        required:true
    },
    email: {
        type:String,
        unique:true,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    salary: {
        type:Number,
        required:true
    }
})
const person = mongoose.model('person',personSchema);
module.exports = person;