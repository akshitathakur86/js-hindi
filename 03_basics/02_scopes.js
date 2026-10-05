// var c = 300
let a = 300
if (true) {
    let a = 20
    const b = 30
    console.log("INNER: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);





function one(){
    const username = "akshita"

    function two(){
        const variable = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()


if (true) {
    const username = "akshita"
    if (username === "akshita") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);     //error
}
// console.log(username);  //error




//+++++++++++++++++++++++intresting++++++++++++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num + 1;
}


// console.log(addTwo(5))     : erro

const addTwo = function(num){
    return num + 2
}

addTwo(5)


