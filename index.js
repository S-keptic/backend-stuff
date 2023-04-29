const express = require('express');

const app = express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hi this is nig")
})

app.get("/about",(req,res)=>{
    res.sendFile("./views/index.html",{root:__dirname})
})


app.get("/about-us",(req,res)=>{
    res.redirect("/about")
})
let users = {}

app.get("/users",(req,res)=>{
    res.send(users)
})
app.use((req,res)=>{
    
    res.status(404).sendFile("./views/404.html",{root:__dirname})
})





app.listen(200,()=>{
    console.log("sick")
})

