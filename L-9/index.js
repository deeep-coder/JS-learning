/*  All Datatypes in JS are mainly categorised in two ways 

1) PRIMITIVE => call by value hote hai means when we will copy it to somewhare means only data copy honga not a refrence means not a memory refrrence means whatever changes we will do it wiil change in copy only 
      -7 types 
      -String, Number, Boolearn, null, undefined, Symbol, BigInt
      
*/


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


/*

 2)  Reference (Non primitive) => pass by refrence

    - Array, Objects, Functions
*/

    const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);  // Do  practice of all datatypes which is written here

