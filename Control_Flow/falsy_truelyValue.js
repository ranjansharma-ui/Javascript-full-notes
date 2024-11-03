// falsy values
//false, 0, -0, BigInt, "", null,undefined,NaN

//truthy values
// "0", 'false', " ",[], {}, function(){}

const userEmail = "r@.ai"

if (userEmail.length === 0) {
    console.log("Array id empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
   console.log("Object is empty");
   
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 10 // first value assign
console.log(val1);

//+++ Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

