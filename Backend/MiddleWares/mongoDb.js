const express= require ('express');
const mongoose=require('mongoose');

const app= new express();
app.use(express.json());


mongoose.connect("mongodb+srv://atharv7740:At%40038934@cluster0.h726el8.mongodb.net/userappnew");

const users=mongoose.model('users',{
    username: String,
    password: String
})


app.post("/signup", async(req,res)=>{
    const username=req.body.username;
    const password= req.body.password;

    const check=  await users.findOne({username:username});
    if(check){
        return res.json({
            mssg:" Username  already exist! ",

        })

    }
    const user=new users({
        username:username,
        password:password
    })
    user.save();

    res.send("Logged in Successfully");


})
app.listen(3000,()=>console.log("server is live at  route 3000"))

