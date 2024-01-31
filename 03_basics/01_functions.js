// function add(x, y){
//     return x + y;
// }

// const result = add(45, 45);
// console.log(result);

// const showMsg = (username) => {
//     if(!username){
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just logged in`;
// }

// console.log(showMsg(""));

function cartPrice(...num){
    let sum=0;
    for(let price of num){
        sum = sum + price
    }
    return sum;
}

console.log(cartPrice(200, 300, 400));

const user = {
    username: "adil",
    price: 999
};

function showObject(obj){
    console.log(`Username is ${obj.username} and price is ${obj.price}`);
}

showObject(user);
showObject({
    username: "junaid",
    price: 699
});

const arr = [".com", ".in", ".io"];

function showArr(arr){
    console.log(`Domain extension is ${arr[1]}`);
}

showArr(arr);
showArr(["adil", "junaid", "altamash"]);