const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
    name: {
        type:String
    },
    work: {
        type:String,
        enum: ['waiter', 'chef', 'manager']       
    },
    age:{
        type:Number      
    },
    mobile: {
        type:Number      
    },
    email: {
        type:String   
    },
    address: {
        type:String        
    },
    salary: {
        type:Number  
    },
    username: {
        type:String  
    },
    password: {
        type:String  
    }
})
const person = mongoose.model('person',personSchema);
module.exports = person;