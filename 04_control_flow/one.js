const arr = [];

if(arr.length === 0){
    console.log("Array is empty");
}

const Obj = {};

if(Object.keys(Obj).length === 0){
    console.log("Object is empty");
}

let val;
val = null ?? null ?? 10;

console.log(val);

val>5 ? console.log(`${val} is greater than 5`) : console.log(`${val} is less than 5`);
