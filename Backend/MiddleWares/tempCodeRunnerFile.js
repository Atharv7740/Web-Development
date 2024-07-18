const express= require('express');
const jwt= require('jsonwebtoken');
const jwtPassword="123456";


const app=new express();
app.use(express.json());

const ALL_USERS=[
    {
        username:"Atharv124",
        password:"123456",
        name: "Atharv"
    },
    {
        username:"Mohit565",
        password:"654321",
        name: "Mohit"
    },
    
    {
        username:"Ram124",
        password:"124325",
        name:"Ram"
    }
];


function userAuthenticate(username,password){
    return ALL_USERS.find((user)=>{
        return user.username===username && user.password===password});
}

app.post("/signIn",(req,res)=>{
    const user= req.body.username;
    const pass= req.body.password;
    let authUser=userAuthenticate(user,pass);

    


    if(!authUser){
        return res.status(403).json({
            mssg: "User not found! SIGN UP"
        })
    }

    var token=jwt.sign({username:user},jwtPassword);
    return res.json({
        token,
    })

})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})



