const express = require('express');
const chalk = require('chalk')
const app = express();
require('dotenv').config();
let data;

app.get("/",(req,res)=>{
    res.send(data.json())
})








app.post("/",(req,res)=>{
    data = req.body
    res.send("data posted successfully")
})






app.listen(process.env.PORT,()=>{
    console.log(chalk.red(`server running on ${process.env.PORT}`))
})
