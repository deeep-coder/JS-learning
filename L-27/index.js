// for loop, break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break    //control flow se bahar kar dega
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue   // condition ko ek bar ko skip karne ke liye use hota hai
    }
   console.log(`Value of i is ${index}`);    
    
}


//*****     Note->  run the code for better understanding