const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config/config').get(process.env.NODE_ENV)
const app = express()

mongoose.Promise = global.Promise
mongoose.connect(config.DATABASE)

const { User } = require('./models/user')
const { Bank } = require('./models/bank')
const { Account } = require('./models/Account')
const { Statement } = require('./models/Statement')

app.use(bodyParser.json())

// GET //
app.get('/api/user',(req,res)=> {
    let email = req.query.email
    User.findOne({email}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);

        res.send(docs)
    })
})

app.get('/api/bankList',(req,res)=> {
    const userId = req.query.userId
    Bank.find({userId},(err,doc) => {
        if(err) return res.status(400).send(err)
        res.send(doc)
    })
})

app.get('/api/accountList',(req,res)=> {
    const userId = req.query.userId
    Account.find({userId},(err,doc) => {
        if(err) return res.status(400).send(err)
        res.send(doc)
    })
})

app.get('/api/transactionList',(req,res)=> {
    const userId = req.query.userId
    Statement.find({userId},(err,doc) => {
        if(err) return res.status(400).send(err)
        res.send(doc)
    })
})

app.get('/api/bank',(req,res)=> {
    let id = req.query.id

    Bank.findById(id,(err,doc) => {
        if(err) return res.status(400).send(err)
        res.send(doc)
    })
})



// POST //
app.post('/api/user',(req,res) => {
    const user = new User(req.body)
    user.save((err,doc) => {
        if(err) return res.status(400).send(err)
        res.status(200).json({
            post:true,
            userId: doc._id,
            email:doc.email
        })
    })
})

app.post('/api/bank',(req,res) => {
    const bank = new Bank(req.body)
    bank.save((err,doc) => {
        if(err) return res.status(400).send(err)
        res.status(200).json({
            post:true,
            bankId: doc._id,
            userId: doc.userId,
            name:doc.name
        })
    })
})
app.post('/api/account',(req,res) => {
    const account = new Account(req.body)
    account.save((err,doc) => {
        if(err) return res.status(400).send(err)
        res.status(200).json({
            post:true,
            accountId: doc._id,
            userId: doc.userId,
            title:doc.title
        })
    })
})

// UPDATE //
app.post('/api/statement',(req,res) => {
    const statement = new Statement(req.body)
    Statement.findOneAndUpdate({_id:statement._id},statement,{new:true, upsert:true,  returnNewDocument:true},(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.status(200).json({
            post:true,
            statement: doc
        })
    })
})

// DELETE //
app.delete('/api/statement',(req,res)=>{
    let id = req.query.id;
    Statement.findByIdAndRemove(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json(true);
    })
})





const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log('SERVER RUNNING')
})
