const desc = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(desc);

const chai = {
    name: "ginger chai",
    price: 10,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bani");
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: true
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for(let [key, value] of Object.entries(chai)){
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`);
    }
}
