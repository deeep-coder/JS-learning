// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); //true
// console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true    //reason is comparators like == ,<,>,>=,<= are works differently ,here comparator converts null in to number ,treating it as 0,so that it gives "true"



// so for comparasion we have to compare in same type not in differnt types is 

console.log(undefined == 0); //false
console.log(undefined > 0);  //false
console.log(undefined < 0);  //false


//strict check => also check datatypes
console.log("2"==2); //true
console.log("2" === 2);   //false