const name = "Deep"
const repoCount = 10

// console.log(name + repoCount + " Value");  //old method 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //also known as string inter-polation


const gameName = new String('deep-com')

console.log(gameName[0]); // here [0] means not an index, it logs the value pair at key 0 , because string is not an array it is an object
console.log(gameName.__proto__);


//different types of Prototypes or Methods


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));



const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))    // "%20" ko replace karenga "-" se

console.log(url.includes('sundar')) //sundar keyward hai ki nahi?

console.log(gameName.split('-'));