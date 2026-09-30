// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 34567285528651893637n



// Reference (Non primitive)

// types : Array Object, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name:"Akshita",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);



//*******************************************************

// stack(primitive)  heap(non-primitive)

let myYoutubename = "Akshitathakurdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "akshitagoogle.com" ,
    upi: "user@123"

}

let userTwo = userOne 
userTwo.email = "akshita@gmail.com"

console.log(userOne)
console.log(userTwo)


