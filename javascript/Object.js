// singleton 

// object literals
//Object.create

const mySym = Symbol("key1")

const JsUser = {
    name : "Ranjan",
    age: 18,
    location: "Delhi",
    email: "ranjan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],

    "full name": "rnajan Sharma",// not acces dot opertor use square bracket
    [mySym]: "mykey1"
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "rajan@chatjpt.com" // override
Object.freeze(JsUser) // now jsUser can't change in any value
JsUser.email = "rajan@chatjpt.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello world" );

}

/*
when will freez the object then 
console.log(JsUser.greeting); // undefined
//console.log(JsUser.greeting());//TypeError: JsUser.greeting is not a function
*/
// console.log(JsUser.greeting());
// console.log(JsUser.greeting);

JsUser.greetingTwo = function(){
    console.log(`Hello Js user , ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



