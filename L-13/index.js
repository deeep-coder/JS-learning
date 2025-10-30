// Dates

let myDate = new Date() // date ka object create kiya and store in instance called myDate


// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)  // here 0 means January 
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14") // here 01 means January
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()  // abi ka time miliseconds me dega

// console.log(myTimeStamp);   
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //to convert   miliseconds into seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})