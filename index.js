const express = require('express');
const app = express()


app.get("/",()=>{
    res.end("hi")
})


app.get("/about",()=>{
    res.end("niggeshwer")
})
