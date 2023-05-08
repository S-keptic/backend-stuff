const express = require('express')
const app  = express()
require('dotenv').config()

app.use(express.json());
 

let user = {}
app.get('/user',(req,res)=>{
 
res.send(user)


})


app.post("/user",(req,res)=>{
    user = req.body
    res.send("data updated successfully" + JSON.stringify(user))

}) 



  
  

app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`)
})