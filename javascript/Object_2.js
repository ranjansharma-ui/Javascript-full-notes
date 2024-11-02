// way of implement object

const tinderUser1 = new Object() // singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123rsnj"
tinderUser.name = "Ranjan"
tinderUser.isLoggedIn = false
// console.log(tinderUser1);
// console.log(tinderUser);

const regularUser = {
    email: "some2gamil.com",
    fullname: {
        userfullname: {
            firstname : "Ranjan",
            lastname: "Sharma"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2)
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }

]

users[1].email // access

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "RAnjan"
}

// course.courseInstructor

const {courseInstructor : instructor} = course // destructure 

console.log(instructor);

// const navbar = ({company}) => { // react js

// }
// navbar(company = "hitesh")





