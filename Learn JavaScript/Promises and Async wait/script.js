const ticket=new Promise((resolve, reject)=>{
    const isBoarded=false;
    if(isBoarded){
        resolve("Ticket is booked Succesfully");

    }
    else{
        reject("Ticked Is not booked");
    }
});
ticket
    .then((data)=>{
        console.log("WOhoooo!",data);
    })
    .catch((data)=>{
        console.log("Oh shitt!!",data);
    })
    .finally((  )=>{
        console.log("Thank You for visiting 🙏🏻 ,Have a nice Day!")
    })