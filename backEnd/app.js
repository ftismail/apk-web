const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const mongodb = require('mongodb')
let db
mongodb.connect(process.env.CONNECTSTRING,{useNewUrlParser:true,useUnifiedTopology:true},function(err,client){
   db = client.db().collection('apps').find().toArray()
   console.log('connect')
   app.listen(process.env.PORT, () => console.log(`Example app listening on port port!`))
})
app.get('/db', async (req, res) => {
    let wow = await db
    res.send(wow)
})
module.exports = app