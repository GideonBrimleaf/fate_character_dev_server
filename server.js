const express = require('express')
const app = express()

app.get('/', function(req, res){
  res.send("I'm Mary Poppins Y'all!")
})

app.listen(3000, function(){
  console.log('App Running on port 3000')
})

