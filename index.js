//////////////////////////////////
//                              //
//                              //
//            files             //
//                              //
//                              //
//////////////////////////////////


// const fs = require("fs")
// fs.readFile("./txt/abc.txt","utf-8",(err,data)=>{
//     console.log(data)
//     fs.readFile("./txt/output.txt","utf-8",(err,data2)=>{
//         console.log(data2)
//         fs.readFile("./txt/paanivich.txt","utf-8",(err,data3)=>{
//             console.log(data3)
//             fs.writeFile("./txt/finaltext.txt", `${data}\n${data2}\n${data3}`, (err) =>{
//                 console.log(`file created successfully`)
//             })
//         })
//     })
// }) 


//////////////////////////////////
//                              //
//                              //
//            server            //
//                              //
//                              //
//////////////////////////////////

const http = require('http')
const path = require('path')
const url = require('url')


const server = http.createServer((req,res)=>{
    const pathName = req.url
    
if(pathName==='/nigga' || pathName==='black'){
    res.writeHead(404,{'Content-type': 'type/html'})
    res.end("<h1>get some niggas</h1>")
    
}else{
    res.end("your momma black")
}

})


server.listen(3000,()=>{console.log("listening on port 3000")})