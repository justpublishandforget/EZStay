const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname:{
        type : String,
        require : true
       },
    username:{
        type : String,
        require : true,
        unique : true
    },
    email:{
        type : String,
        
        require : true
       },
    phone:{
        type : String,
        require : true
       },
    dob:{
        type : Date,
        require : true
       },
    password:{
        type : String,
        require : true 
    }
})

module.exports = mongoose.model('User', userSchema);