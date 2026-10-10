// if

const isUserLoggedIn = true
const temprature = 30

// if (2 == "2") {
//     console.log("executed");
// }

// if (temprature > 30) {
//     console.log("It's hot outside");
// } else   {
//     console.log("It's cold outside");
// } 
// console.log("execute")


// <, <=, >, >=, ==, ===, !=, !==




// const score = 200

// if (score > 100) {
//     let power = "super"
//     console.log(`User power: ${power} `);

// }
//  console.log(`User power: ${power} `); // ReferenceError: power is not defined 



const balance = 1000

// if (balance > 500) console.log("You can buy the product");   right syntax
  

// if (balance > 500) console.log("You can buy the product"),   wrong syntax
// console.log("You can also buy the product");


// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log( "lessthan 900");
// } else {
//     console.log("less than 1200");
// }



const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = false

if (userloggedIn && debitCard) {
    console.log("You can buy the product");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("You can buy the product");
}




