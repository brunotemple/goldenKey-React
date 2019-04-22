const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        unique:1
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    firstName:{
        type:String,
        maxlength:100,
    },
    lastName:{
        type:String,
        maxlength:100,
    }
})

const User = mongoose.model('User',userSchema)
module.exports = { User }