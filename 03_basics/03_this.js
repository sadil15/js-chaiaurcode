// const user = {
//     username: "adil",
//     price: 999,

//     welcomeMsg: function() {
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMsg();
// user.username = "alto";
// user.welcomeMsg();

// console.log(this);


const chai = () => {
    let userName = "adil"
    console.log(this.userName); 
}
console.log(this);

chai();