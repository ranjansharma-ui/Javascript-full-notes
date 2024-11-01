// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2024,0,23)
// let myCreateDate = new Date(2024,0,23, 5,4)
// let myCreateDate = new Date("2024-01-14")
// let myCreateDate = new Date("2024-01-14")

// console.log(myCreateDate.toLocaleDateString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",
    
})





