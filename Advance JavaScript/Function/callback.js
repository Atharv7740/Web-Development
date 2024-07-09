// const greet=(name,callBack)=>{
//     console.log("Hi " + name);
//     callBack();

// }

// const callMe=()=>{
//     console.log("Hello from callBack");

// }
// greet("Atharv Tripathi ", callMe);

//  2second code

function getCheese(callBack){
    setTimeout(()=>{
        const cheese= 'c';
        console.log("Cheese mil gaya hai");
        callBack(cheese);
    },2000);
}


function makeDough(cheese,callBack){
    setTimeout(()=>{
        const dough=cheese + 'd';
        console.log("dough ban gaya");
        callBack(dough);

    },5000)
}

function bakePizza(dough,callBack){
    setTimeout(()=>{
        const pizza=dough+ 'p'
        console.log("pizza ban gaya");
        callBack(pizza);
    },5000)
}

getCheese((data)=>{
    makeDough(data,(data)=>{
        bakePizza(data,(data)=>{
            console.log(data+"order is ready");
        })
    })

})