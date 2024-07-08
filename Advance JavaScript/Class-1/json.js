//json-> javascript object notation
// json-> parse(), strigify();

const obj={
    name: "Atharv",
    age: 20
}

console.log(obj);

const convertString=JSON.stringify(obj);
console.log("Converted to string :"+convertString);

const convertObject=JSON.parse(convertString);
console.log(convertObject);