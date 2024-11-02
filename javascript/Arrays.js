const myArr = [0, 1, 2, 3, 5]
const myHeros = ["krish", "hulk", "captain"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

// Array methods

// myArr.push(5)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);
/*
+++++++++++++++++++++++++++++++++++++++++
// myArr.unshift(8)
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr);
console.log(myArr.indexOf(9)); // -1 not exist

const newArr = myArr.join() // convert into String
console.log(myArr);
console.log(newArr);// type String
*/





//++++++++++++++++++++++++++++++++++++----------
// slice, splice
/*
console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)

console.log(myn2);
console.log("C",myArr);
*/


/*
 difference between slice and splice

The splice() method of Array instances changes 
the contents of an array by removing or replacing 
existing elements and/or adding new elements in place.

To create a new array with a segment 
removed and/or replaced without mutating 
the original array, use toSpliced(). To access part of an
 array without modifying it, see slice().


*/


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["Superman","flash", "batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allheros =  marvel_heros.concat(dc_heros)
// console.log(allheros);

const all_new_heros = [...marvel_heros,...dc_heros] // speried opretor

// console.log(all_new_heros);

const another_array = [1,2,[3,4,5],6,7,[5,7,[8,2,7]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Ranjan"))
console.log(Array.from("Ranjan"))
console.log(Array.from({name: "Ranjan"}));// interesting -> []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

















