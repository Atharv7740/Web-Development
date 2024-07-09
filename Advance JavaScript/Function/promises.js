function getCheese(callBack){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const cheese= '🧀'
            console.log("Cheese mil gaya hai");
            resolve(cheese);
            
        },2000);
    });
    
}


function makeDough(cheese,callBack){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dough=cheese + "🟤";
            console.log("dough ban gaya");
            resolve(dough);
            
    
        },5000)

    });
    
}

function bakePizza(dough){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const pizza=dough+ '🍕'
            console.log("pizza ban gaya");
            resolve(pizza);
        },5000);

    });
    
}
async function getOrder(){
        const cheese= await getCheese();
        
        const  dough=await makeDough(cheese);
        
        const pizzza= await bakePizza(dough);
        console.log(pizzza+"here is order");
};

getOrder();

