class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, pass){
        super(username)
        this.email = email;
        this.pass = pass;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@chai.com", "123");

chai.addCourse();

const tea = new User("tea");
tea.logMe();
chai.logMe();

console.log(chai instanceof User);