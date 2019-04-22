const mongoose = require('mongoose')

const bankSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    userId:{
        type:String,
        required:true,
    }
})

const Bank = mongoose.model('Bank',bankSchema)
module.exports = { Bank }