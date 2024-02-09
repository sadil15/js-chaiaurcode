class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get password(){
        return this._password.toUpperCase();
    }

    get email(){
        return this._email.toUpperCase();
    }

    set password(value){
        this._password = value.toUpperCase();
    }

    set email(val){
        this._email = val.toUpperCase();
    }
}

const adil = new User("adil@15.com", "abc123");
console.log(adil.password);
console.log(adil.email);