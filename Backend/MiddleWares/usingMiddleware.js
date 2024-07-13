const express=require('express');
const  app = new express();


function userMiddelware(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;

    if(username!=="Atharv" || password!=="pass"){
        res.json({
            mssg:"No Access! Invalid User"
        })
        
    }
    next();

}

function inputMiddleware(req, res, next){
    const value = parseInt(req.query.value);
    if(value!==1 && value!==2){
        res.json({
            mssg:"Invalid Input! Input should be (1 or 2)"
        })
    }
    next();
}

app.get("/", userMiddelware,inputMiddleware,(req,res)=>{
    res.send("Learned how to use middleware perfectly!!");

})
app.listen(2000,()=>{
    console.log("Http server is running on port 2000");
})



