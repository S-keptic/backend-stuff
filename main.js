const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 3000;

app.use(express.json())
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))
app.use((req,res,next)=>{
    console.log("hi")
    next();
})

const getAllTours = (req,res)=>{
res.status(200).json({
    status:'sucess',
    results:tours.length,
    data:{
        tours
    }
})
} 


const newTour = (req,res)=>{
    const newId = tours[tours.length - 1].id + 1;

 const newTour = Object.assign({id:newId},req.body)
 tours.push(newTour)

 fs.writeFile(`${__dirname}/dev-data/data/tours-SVGFEDisplacementMapElement.json}`,JSON.stringify(tours),err=>{
    res.status(201).json({
        status:'succcess',
        data: {
            tour: newTour
        }
    })
 })


}


const updateTour = (req,res)=>{
    const id = req.params.id *1
    const tour = tours.find(el=>el.id===id)
    if(id>tours.length){return res.status(404).json({status:"failed",message:"invalid ID"})}
    res.status(200).json({
        status:"success",
        data:{
            tour:"updated tour here...>"
        }
    })
}






const deleteTour = (req,res)=>{
    const id = req.params.id *1
    const tour = tours.find(el=>el.id===id)
    if(id>tours.length){return res.status(404).json({status:"failed",message:"invalid ID"})}
    res.status(200).json({
        status:"success",
        data:null
    })
}


const getTour = (req,res)=>{
    // console.log(req.params)
    const id = req.params.id *1
    const tour = tours.find(el=>el.id===id)
    if(id>tours.length){return res.status(404).json({status:"failed",message:"invalid ID"})}

    res.status(200).json({
        status:"success",
       data:{
        tour
       }
    })

   
   
    }


app.route('/api/v1/tours').get(getAllTours).post(newTour)
app.route('/api/v1/tours/:id').patch(updateTour).delete(deleteTour).get(getTour)









app.listen(PORT,()=>{
    console.log("✅🎟️SERVER IS UP")
})
