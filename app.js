const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
app.get('/home',(req,res)=>{
    res.send('hello world')
})

app.listen(port,()=>{
    console.log(`connecting to port 5000 ${port}`)
})