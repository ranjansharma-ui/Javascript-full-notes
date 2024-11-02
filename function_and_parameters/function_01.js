

function sayMyname(){
    console.log("R");
    console.log("a");
    console.log("n");
    console.log("j");
    console.log("a");
    console.log("n");
}

// sayMyname()

function addTwoNumbers(num1,num2){
    console.log(num1 + num2);
    
}

// addTwoNumbers(2,4);
// addTwoNumbers(2,"4");
// addTwoNumbers(2,null);

function addTwoNumbers1(num1,num2){
    // let result = num1+num2
    // return result;
    return num1+num2
    console.log("hello"); // unreachable code

    
    
}

const result = addTwoNumbers1(3,6)

// console.log("Result: ", result); 

function loginUserMessage(username){ // (username = "Sam")
    if(username === undefined) // or (!username)
        {
        console.log("please enter a username");
        return;
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("RAnjan"));
// console.log(loginUserMessage()); // undefined

function calculateCartPrice(...num1){
    return num1

}
// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username : "Price",
    price: 190

}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sna",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,5,6,2]));


