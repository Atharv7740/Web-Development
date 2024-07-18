const express = require('express');
const zod = require('zod');

const app= new express();
app.use(express.json());



const schema= zod.number();

app.post("/",(req,res)=>{
    const numArray=parseFloat(req.body.numArray);
    const response=schema.safeParse(numArray);
    res.send(response);
}
)




// app.use((err,req,res,next)=>{
//   res.status(411).send"Sorry Something went wrong")
// })

app.listen(1000,()=>{
    console.log("Server is live on port 1000");
})


