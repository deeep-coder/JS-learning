const score = 400
// console.log(score);

const balance = new Number(100)  // new object create honga which is number
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));   // points ke baad kitne digits chahiye here we want 2 digits

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));       // here 4 means 123.9 print honga ,but if we gave 3 then it will print 124  

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // indian standards ke hisab se quoma notation hoga



/******************        MATHS        *********************/


// console.log(Math);   // Math ek JS object hai
// console.log(Math.abs(-4)); // convert in to absolute value
// console.log(Math.round(4.6));   // round off karne ke liye
// console.log(Math.ceil(4.2));  //ceil value return karega
// console.log(Math.floor(4.9));  //floor value return karega
// console.log(Math.min(4, 3, 6, 8)); // finding minimum value
// console.log(Math.max(4, 3, 6, 8)); //finding maximum value

console.log(Math.random());   // Math.random ki value always in between 0 and 1
// console.log((Math.random()*10) + 1); 
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // value 10 and 20 ke bich me aayengi which is in integer 