const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const values = nums.filter( (val) => {
//     return val > 4;
// });



// const values = [];

// nums.forEach( (num) => {
//     if(num > 4){
//         values.push(num);
//     }
// });

// console.log(values);



// const newNums = [];

// nums.forEach( (val) => {
//     newNums.push(val + 10);
// });

// console.log(newNums);



// const newNums = nums
//                 .map( (val) => {
//                     return val * 10
//                 })
//                 .map( (val) => {
//                     return val + 1 
//                 })
//                 .filter( (val) => {
//                     return val > 60
//                 })

// console.log(newNums);

// const myNums = [1, 2, 3];

// const initialVal = 0;

// const myTotal = myNums.reduce( (acc, currVal) => {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)

// console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "dev course",
        price: 5999
    },
    {
        itemName: "app course",
        price: 12999
    },
]

const total = shoppingCart.reduce( (acc, item) => {
    return acc + item.price;
}, 0)

console.log(total);
