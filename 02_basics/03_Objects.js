// Singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Akshita",
    "full name": "Akshita thakur",
    [mySym]: "mykey1",
    age: 19,
    location: "meerut",
    email: "akshita@gmail.com",
    isLoggedIn: false,
    lastloginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "akshita@gpt.com"
// Object.freeze(JsUser)
JsUser.email = "akshita@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

