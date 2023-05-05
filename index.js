const express = require('express');
const chalk = require('chalk')
const app = express();
require('dotenv').config();

app.get("/",(req,res)=>{
    res.send("nigga")
})


app.listen(process.env.PORT,()=>{
    console.log(chalk.red(`server running on ${process.env.PORT}`))
})