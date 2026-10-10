const userEmail = "@kshitaai"

if (userEmail) {
  console.log("You have an email address");
} else {
  console.log("Please provide an email address");
}



// falsy values
//false, 0, -0, "", BigInt 0n, null, undefined, NaN


//truthy values
// "0", "false", " ", [], {}, function(){}

if (userEmail.length === 0) {
  console.log("Array is empty");
}


const emptyobject = {}

if (Object.keys(emptyobject).length === 0) {
  console.log("Object is empty");
}




// nullish coalescing operator (??) : null 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 10

console.log(val1);



//  terniary operator
//  condition ? true : false

const iceteaprice = 100
iceteaprice >= 90 ? console.log("less than 90") : console.log("greater than 90");
