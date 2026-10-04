
function sayMyName() {
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("A");
}

// sayMyName()



function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}
// addTwoNumbers(5, 6)



function addTwoNumbers(num1, num2) {
   
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(5, 6)
// console.log("Result:", result);


function loginUserMessage(username = "sam") {
    if(!username ) {
        console.log("Please enter a username");
        return;
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Akshita"));
// console.log(loginUserMessage());    




function calculateCartPrice(...num1){
    return num1

}
console.log(calculateCartPrice(100, 499, 421))  


const user = {
    username: "Akshita",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject}`);
}
// handleObject(user)
handleObject({
    username: "Sam",
    price: 999

})

const myNewArray = [1, 2, 3, 4, 5]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
