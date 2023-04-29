const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send("hi this is nig")
})

app.get("/about",(req,res)=>{
    res.sendFile("./views/index.html",{root:__dirname})
})

app.listen(200,()=>{
    console.log("sick")
})