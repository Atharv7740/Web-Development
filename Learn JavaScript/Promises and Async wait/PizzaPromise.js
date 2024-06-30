function getCheese(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const Cheese='🧀';
            resolve(Cheese);

        },2000)
    });
}

function makeDough(Cheese){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const Dough= Cheese +'🟤';
            resolve(Dough)
        },2000);

    });
}

function bakePizza(Dough){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const Pizza=Dough+'🍕';
            resolve(Pizza);
        },2000)
        
    });
}


// getCheese()
// .then((data)=>{
//     console.log("here is the Cheese",data);
//     return makeDough(data);
// })
// .then((data)=>{
//     console.log("here is the dough",data);
//     return bakePizza(data);
// })
// .then((data)=>{
//     console.log("here is the Pizza",data);
// })
// .catch((Data)=>{
//     console.log("Program not worked",Data);
// })
// .finally(()=>{
//     console.log("Thanks for Visiting");
// })


// Async-await 

async function order(){
    try{
    const cheese=await getCheese();
    console.log("Cheese is Here", cheese);
    const dough =await makeDough(cheese);
    console.log("Dough is here",dough);
    const pizza=await bakePizza(dough)
    console.log("Pizza is here",pizza);
    }
    catch(data){
    console.log("Error!! ",data);
    }
    finally{
        console.log("process is ended");
    }
}

order();