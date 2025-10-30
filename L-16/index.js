// object is construct by two methods 1) by Literals and 2) by constructor

//literals ki tarah declare karne se Singleton nahi banta but constructor ki tarah declare karne se singleton banta hai

// 1)by constructor
// Object.create

// 2) By literals 
// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Deep",
    "full name": "Deep Detroja",
    [mySym]: "mykey1",  // symbol ko [] se hi declarer kar sakte hai
    age: 18,
    location: "Morbi",
    email: "deep@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)  // mainly used but following methods are also used
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "deep@chatgpt.com"
// Object.freeze(JsUser)  //object ko freeze karne ke liye
JsUser.email = "deep@microsoft.com" 
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting);  // function ka refrence aa jayega
console.log(JsUser.greeting());  // function print honga
console.log(JsUser.greetingTwo());