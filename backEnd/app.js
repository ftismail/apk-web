const express = require('express')
const request = require('request');
const app = express()
const port = 5000
const mongodb = require('mongodb')
let db
const connectString = 'mongodb://ismail:loocatortor@cluster0-shard-00-00-ickzv.mongodb.net:27017,cluster0-shard-00-01-ickzv.mongodb.net:27017,cluster0-shard-00-02-ickzv.mongodb.net:27017/apk?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
mongodb.connect(connectString,{useNewUrlParser:true,useUnifiedTopology:true},function(err,client){
   db = client.db().collection('apps').find().toArray()
   console.log('connect')
   app.listen(5000, () => console.log(`Example app listening on port port!`))
})
app.get('/db', async (req, res) => {
    let wow = await db
    res.send(wow)
})
module.exports = app