// const arr=[1,2,3,4,5,6,7,8,9,10]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//     }
// }

// console.log(arr);

// if else  for loop code;



// const firstName=["atharv","Mohit","Ram"];
// const age=["20","19","17"];

// for(let i=0;i<age.length;i++)
// if(age[i]>18){
//     console.log(firstName[i]);
// }

// arrays

// const a=["Hello",1,(name)=>{console.log("hello "+name)},];
// a[2]("Atharv");

//object

// const obj={
//     firstName:"Atharv",
//     age:20,
//     gender:"Male"
// }

// console.log(obj["firstName"]);

// Function

// function sum(a, b){
//     result=a+b;
//     return result;

// }

// function displayResult(data){
//     console.log("Result of sum: "+ data);

// }

// displayResult(sum(1,2));


// function calback( passing function as a parameter inside fucntion )

function calculate(a,b,operation){
    const val= operation(a,b);
    console.log(val);
}

function sum(a,b){
    return a+b;

}

calculate(1,2,sum);




