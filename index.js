// create an http server

const http = require ('http');
const fs = require('fs')

const server = http.createServer((req,res)=>{


res.setHeader("Content-Type","text/html");

fs.readFile('main.html',(err,data)=>{
    if(err){
        console.error(err);
    }
    else{
        res.end(data)
    }

})




})

server.listen(3000,()=>{
    console.log("server is up");
})