//new Keyword

// function sum(a, b){
//     return a+b;
// }

// sum.power = 5;

// console.log(sum(5, 10));
// console.log(sum.power);
// console.log(sum);
// console.log(sum.prototype);

// function createUser(username, score){
//     this.username = username;
//     this.score = score;
// }

// createUser.prototype.increement = function(){
//     this.score++;
// }

// createUser.prototype.printMe = function(){
//     console.log(`score is ${this.score}`);
// }

// const chai = new createUser("chai", 25);
// const tea = new createUser("tea", 250);

// chai.printMe();
// chai.increement();
// tea.increement();

// console.log(chai);
// console.log(tea);



// Prototype

// function trueLength(str){
//     this.str = str;
//     let newStr = this.str.trim().length;
//     console.log(`True Length of "${this.str}" is ${newStr}`);
// }

// let myChannel = "Chai     ";

// trueLength(myChannel);



// let myHeroes = ["thor", "spiderman"];

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function (){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.adil = function(){
//     console.log(`Adil is present in all object`);
// }

// Array.prototype.heyAdil = function(){
//     console.log(`Adil says hello`);
// }

// heroPower.adil();

// myHeroes.adil();
// myHeroes.heyAdil();

let myName = "Adil     ";

String.prototype.trueLen = function(){
    console.log(this);
    console.log(`True lenght is ${this.trim().length}`);
}

myName.trueLen();
"alto shaikh    ".trueLen();