const express = require('express')

const app = express()

app.get('/', (req, res)=>{
   res.send("Express Running")
})

app.listen(5000, ()=>{
    console.log("App is Running at 5000")
})