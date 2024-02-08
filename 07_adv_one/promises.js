const promiseOne = new Promise( (resolve, reject) => {
    setTimeout(() => {
       console.log("Async task is complete"); 
       resolve();
    }, 1000);
});

promiseOne.then(() => {
    console.log("Promise Consumed");
    console.log("\n");
});

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2 completed");
        resolve();
    }, 2000);
}).then(() => {
    console.log("Promise for task 2 consumed");
    console.log("\n");
});

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: "Chai", 
            email: "chai@chaiaurcode.com"
        })
    }, 3000);
});

promiseThree.then( (user) => {
    console.log(user.email);
    console.log("\n");
});

const promiseFour = new Promise( (resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve(
                {
                    username: "Adil",
                    password: "addy2004"
                }
            );
        }
        else{
            reject("Error: Something went wrong");
        }
    }, 4000);
});

promiseFour
.then( (user) => {
    return user.username;
})
.then( (data) => {
    console.log(data);
})
.catch( (err) => {
    console.log(err);
})
.finally( () => {
    console.log("Resolved or Rejected");
    console.log("\n");
})


const promiseFive = new Promise( (resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve(
                {
                    username: "JavaScipt",
                    password: "js123"
                }
            );
        }
        else{
            reject("ERROR: JS went wrong");
        }
    }, 5000);
});

async function consume(){
    try{
        const response = await promiseFive;
        console.log(response);
    } 
    catch (error){
        console.log(error);
    }
}

consume();


function getUser(){
    setTimeout(async function(){
        try {
            const response = await fetch("https://api.github.com/users/sadil15");
            const data = await response.json();
            console.log("\n", data);
        } 
        catch (error){
            console.log(`ERROR: ${error}`);
        }
    }, 6000); 
}


setTimeout(() => {
    fetch("https://api.github.com/users/sadil15")
    .then( (response) => {
        return response.json();
    })
    .then( (data) => {
        console.log("\n",data);
    })
    .catch( (error) => {
        console.log("\n",error);
    })
}, 6000)
