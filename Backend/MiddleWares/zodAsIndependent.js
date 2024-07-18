const zod = require('zod');

function checkValdation(obj){

    const schema = zod.object({
            Username:zod.string(),
            email: zod.string().email(),
            password : zod.string().min(8)
        })
    
    const response= schema.safeParse(obj);

    console.log(response);


}

const object={
    name:"atharv",
    email:"atharv@gmail.com",
    pass: "Abcsdeassd"

}

console.log("zod as independent library use case")

checkValdation(object);

console.log("The End");

