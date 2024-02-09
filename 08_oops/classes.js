const user = {
    username: "Adil",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const userOne = new User("Adil", 12, true);
const userTwo = new User("Chai aur Code", 11, false)
// console.log(userOne instanceof User);
// console.log(userTwo);



 //Arrow function
const Users = (username, loginCount, isLoggedIn) => {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const userThree = Users("Sohail", 12, true);
console.log(userThree);