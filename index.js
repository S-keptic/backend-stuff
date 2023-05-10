const fs = require("fs")
fs.readFile("./txt/abc.txt","utf-8",(err,data)=>{
    console.log(data)
    fs.readFile("./txt/output.txt","utf-8",(err,data2)=>{
        console.log(data2)
        fs.readFile("./txt/paanivich.txt","utf-8",(err,data3)=>{
            console.log(data3)
            fs.writeFile("./txt/finaltext.txt", `${data}\n${data2}\n${data3}`, (err) =>{
                console.log(`file created successfully`)
            })
        })
    })
})