// for

for (let index = 0; index < 10; index++) {
const element = index;
if (element == 5)  {
    // console.log("5 is the best number");
}
// console.log(element);
}
// console.log(element); // This will throw an error because 'element' is not defined outside the loop


for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value: ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + (i * j));
    }
}   


let myArray = ["apple", "banana", "cherry", "date", "elderberry"];
// console.log(myArray.length); 
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i]
    // console.log(myArray[i]);
}


// break and continue

// for (let index = 1; index <= 20; index++){
//     if (index == 5){
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`value of i is $(index)`);

// }




for (let index = 1; index <= 20; index++){
    if (index == 5){
        console.log(`detected 5`);
        continue
    }
console.log(`value of i is ${index}`);

}


