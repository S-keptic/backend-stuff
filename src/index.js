const express = require('express');
const app = express();
const path = require('path')
const staticPath = path.join(__dirname,"../public")
app.use(express(staticPath))

app.get("/",(req,res)=>{
    res.send("Welcome to my homepage")
})
app.get("/about",(req,res)=>{
    res.send("Welcome to my about page")
})
app.get("/contact",(req,res)=>{
    res.send("Welcome to my contact page")
})

app.get("/temp",(req,res)=>{
    res.send("Welcome to my temp page")
})
app.get("/poke",(req,res)=>{
    res.send({
        "name":{
            "nigg":"fuck",
        },
        "name2":"niggeshwer",

    })
})




const server = async()=>{
    app.listen(4000,()=>{
        console.log("up!!!!")


    })

}

server();