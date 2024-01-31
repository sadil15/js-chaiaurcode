// const user = {
//     email: "abc@gmail.com",
//     fullName: {
//         userFullName: {
//             firstName: "Adil",
//             lastName: "Shaikh"
//         },
//     },
// }

// console.log(user.fullName.userFullName.firstName);

// const obj1 = {
//     1: "a",
//     2: "b",
// }
// const obj2 = {
//     3: "a",
//     4: "b",
// }
// const obj3 = {
//     5: "a",
//     6: "b",
// }

// const obj4 = Object.assign({}, obj1, obj2, obj3);
// const obj5 = Object.assign(obj1, obj2);

// console.log(obj4);
// console.log(obj5);

// const newObj = {
//     obj1,
//     obj2
// }

// console.log(newObj);


// //Most efficient way to merge Objects
// const newObj1 = {...obj1, ...obj2, ...obj3};
// console.log(newObj1);


// const users = [
//     {
//         email: "xyz@gmail.com",
//         username: "xyz123"
//     },
//     {
//         email: "xyz@gmail.com",
//         username: "xyz123"
//     },{
//         email: "xyz@gmail.com",
//         username: "xyz123"
//     },
// ];

// console.log(users[0].email);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty("email"));



const course = {
    couserName: "JS in Hindi",
    price: 999,
    courseInstructor: "Adil"
};

const {courseInstructor: inst} = course;

console.log(inst);

