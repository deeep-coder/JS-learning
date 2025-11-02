// ----------for of loop--------------------

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps => a object that holds key-value pairs and remembers the original insertion order of the keys.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


// * NOTE -> array ke andar loop lagane ke liye for of loop ka use karenge and for object we use for in loop "GENERALLY" !!



// ----------for in loop--------------------

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}



// -------------- for each loop ------------------

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){  //callback function 
//     console.log(val);
// } )

// coding.forEach( (item) => {   // callback function in arrow function formate
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)   // we can do like this also here we have to give function refrence only



// array of objects

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
