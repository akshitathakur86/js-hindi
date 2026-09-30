const Name = "akshita"
const repoCount = 23
// console.log(Name + repoCount + "value" );

console.log(`hello my name is ${Name} and my repo count is ${repoCount}`);

const gameName = new String('aks-hit-ath')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "     akshita     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://akshita.com/hitesh%20thakur"

console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));









