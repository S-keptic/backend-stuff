const express = require('express');
const chalk = require('chalk')
const app = express();
require('dotenv').config();



app.listen(process.env.PORT,()=>{
    console.log(chalk.green(`server running on ${process.env.PORT}`))
})