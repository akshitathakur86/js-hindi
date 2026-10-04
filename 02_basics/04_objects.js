// const tinderUser = new Object()  singleton object

// nonsingleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "John Doe"
tinderUser.isLoggedIn = false

// console.log(tinderUser);



const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Akshita",
            lastName: "Thakur"

        }
    }
}
// console.log(regularUser.fullname.userFullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2)

const obj4 = {...obj1, ...obj2}
// console.log(obj3);




const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty("isLoggedIn"));




const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "Akshita Thakur"
}
//course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseinstructor);
console.log(instructor);

// {
//     "name": "Akshita",
//     "course": "js in hindi",
//     "Price": "free",
// }


[
    {},
    {},
    {}
]
