


//destructure of object means {}

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor //to access the courseInstructor value

const {courseInstructor} = course // this is  another methode to access the courseInstructor value 
// console.log(courseInstructor);


//we can also use this methode ,here we replace the name of courseInstructor to instructor 
const {courseInstructor: instructor} = course
console.log(instructor);


//*********************************************** API ***********************************************

// JSON -in JSON key and vlaue both are in string


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

 