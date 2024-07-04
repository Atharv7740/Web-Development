var bubbles=" ";
for(var i=0; i<165;i++){
   
    bubbles+=`<div class="bubble"> ${Math.floor(Math.random()*10)} </div>`
}
document.querySelector('.bubble-section').innerHTML=bubbles;