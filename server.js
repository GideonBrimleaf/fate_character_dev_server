const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')
const characters = require('./characters.json')

app.use(cors())

app.get('/', function(req, res){
  res.send(characters)
})

app.listen(3000, function(){
  console.log('App Running on port 3000')
})

