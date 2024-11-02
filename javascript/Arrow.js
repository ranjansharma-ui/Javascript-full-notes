const user = {
    username: "Ranjan",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "sna"
// user.welcomeMessage()

console.log(this);



// function chai(){
//     let username = "Ranjan"
//     console.log(this.username);
    
// }
// chai() undefined

// const chai = function(){
//     let username = "Ranjan"
//      console.log(this.username);
// }
// chai() // undefined

// Arrow function
const chai = () => {
    let username = "Ranjan"
     console.log(this);
}
// chai() 

// Arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));

// const addTwo = (num1, num2) =>  num1 + num2 // implicit statement
// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username : "RAnjan"})
console.log(addTwo(3,4));


const myArray = [2, 3, 5, 6]





