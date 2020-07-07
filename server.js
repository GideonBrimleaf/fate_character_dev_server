const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()
const cors = require('cors')
const characters = require('./characters.json')
const bodyParser = require('body-parser')
const fs = require('fs')
require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())

app.get('/', function(req, res){
  res.send("I'm Mary Poppins Y'All!")
})

app.get('/characters', function(req, res){
  res.json(characters)
})

app.post('/characters', function(req, res){
  const updated_characters = JSON.stringify({"characters": req.body})
  
  fs.writeFile('./characters.json', updated_characters, (err) => {
    if (err) console.log(err)
    console.log('Successfully wrote to file')
  })
  res.send({"status": "success", "data": updated_characters})
})

if (!process.env.FIREBASE_CONFIG){
  app.listen(PORT, function(){
    console.log('App Running on', PORT)
  })
}
