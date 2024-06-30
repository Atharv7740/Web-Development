function getCheese(callBack){
    setTimeout(()=>{
        const Cheese='🧀';
        console.log('Here is the Chees'+Cheese);
        callBack(Cheese);
    },2000)
}

const getDough=(Cheese,callBack)=>{
    setTimeout(()=>{
        const Dough= Cheese + '🟤';
        console.log('Here is dough'+Dough);
        callBack(Dough);

    },2000)

}

const pizza=(Dough,callBack)=>{
    setTimeout(() => {
        const pizzza= Dough + '🍕';
        console.log('Here is the Pizza'+pizzza);
        callBack(pizzza);
        
    },2000);

}

getCheese((Cheese)=>{
    getDough(Cheese,(Dough)=>{
        pizza(Dough,(pizzza)=>{
            console.log("Got the pizza"+pizzza)
            
        })
    })
})