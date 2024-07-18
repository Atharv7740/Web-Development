const express=require("express");
const app= new express();

let no_of_hit_on_website=0;

function calculateHit(req,res,next){
    no_of_hit_on_website++;
    console.log("website Hit: ",no_of_hit_on_website);
    next();
}

app.get("/",calculateHit, (req ,res)=>{
    res.send(`<h1 style="text-align: center">Welcome to website</h1>`
    )
})

app.listen(3000,()=>{
    console.log("server is live at 3000");
})