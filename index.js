
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let users = {};
app.get("/users", (req, res) => {

    res.send(users);

})

 

const postUser = ()=>{ app.post("/users",(req,res)=>{
    users = req.body;
    res.json({
        message:"data is received",
        user:users
    })
})
}
 


app.patch("/users",(req,res)=>{

let updatedData;
for(let key in users){   
    users[key]=updatedData[key]

}
    res.json({
        message:"data updated successfully"
    })

})

app.delete("/users",(req,res)=>{
    users = {}
    res.json({
        message: "data deleted successfully"
    })
})






app.listen(PORT, () => {
    console.log("ngl")
})