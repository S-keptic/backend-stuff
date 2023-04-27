// create an http server

const http = require ('http')

const server = http.createServer((req,res)=>{
console.log("server is up")
})

server.listen(3000,()=>{})