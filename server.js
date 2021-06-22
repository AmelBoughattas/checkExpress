const express = require('express')
 const myLogger = require('./middleware/myLogger')
 
const app = express()

 app.use(myLogger)

const PORT = 5500

app.use(express.static(__dirname+ "/public"));

app.listen(PORT,myLogger, (err) =>{
    err ? console.log(err) : console.log(`the server is running on port ${PORT}`)
})
