"use strict";

const accountId = 45213;
let accountPassword = "12345";
let accountState;
let temp = null;

const id = Symbol("123");
const anotherId = Symbol("123");

const bigNum = 6551648494516216518n;

const heroes = ["spiderman", "ironman", "batman", "superman"];

const student = {
    name: "Adil",
    age: 19,
    cgpa: 9.8
};

const func = () => {
    console.log("Hello World");
};

console.table([accountId, accountPassword, accountState]);

console.log(accountId, accountPassword);

console.log(typeof(temp));

console.log(typeof(id));
console.log(id == anotherId);
console.log(id === anotherId);

console.log(typeof(bigNum));

console.log(typeof(heroes));
console.log(typeof(student));

func();
console.log(typeof(func));
