const user = {
    username: "Akshita",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username} Welcome to website`);
        // console.log(this);   current context
    }

}
user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()
// console.log(this);   current context empty
//  in browser this shown window



// function chai(){
//     console.log(this);  
// }
// chai()  




// const chai = function(){
//     let username = "Akshita"       undefinedddd
//     console.log(this.username);  
// }



//  arrow function

//  explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// implicit return
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "akshita"})
console.log(addTwo(5, 6))






