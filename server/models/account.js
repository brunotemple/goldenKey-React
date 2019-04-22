const mongoose = require('mongoose')

const accountSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        default:'n/a',
        maxLength:100
    },
    bankId:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    accountType:{
        type:Number,
        required:true
    }
},{timestamps:true})

const Account = mongoose.model('Account',accountSchema)
module.exports = { Account }