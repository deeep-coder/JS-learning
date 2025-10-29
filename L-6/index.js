let score ="33";
// let score ="33abc"

console.log(typeof score);
console.log(typeof (score));    //both methods are same 

let convertStrtoNumber= Number(score); // convert string in to number 
console.log(convertStrtoNumber); // If we give only nubers in string like "33" then it will convert it to number , but if we gave string like "33abc" then it will thraw an "NaN" means not a number
console.log(typeof convertStrtoNumber); // in both cases like "33" and "33abc" it will return  "number" 

// note :JS always string ko always number me convert kar denga so we have to carefull about it ,because this is a limitation of JS


//      <-------------------------------//conversion in boolean //-------------------------------------------------------------------------------->


//let isLoggedIn = 1;               // 1 => true , 0 => false
let isLoggedIn = "";               // "" => false
//let isLoggedIn = "Deep";        // "Deep" => true

let convertInBoolean= Boolean (isLoggedIn)
console.log(convertInBoolean);


