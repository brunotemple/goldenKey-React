const mongoose = require('mongoose')

const statementSchema = mongoose.Schema({
    accountId:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
},{timestamps:true})

const Statement = mongoose.model('Statement',statementSchema)
module.exports = { Statement }