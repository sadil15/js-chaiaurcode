let date = new Date();

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());

console.log(typeof(date));

let newDate = new Date(2024, 0, 23);
let newDate2 = new Date(2024, 0, 23, 5, 30, 55);
let newDate3 = new Date("07-15-2004");
console.log(newDate3.toLocaleString());

let timeStamp = Date.now();
console.log(Math.round(timeStamp/1000));

console.log(Math.round(newDate3.getTime()/1000));

let newDate4 = new Date();
console.log(newDate4.getMonth());

newDate4.toLocaleString("default", {
    weekday: "long"
});