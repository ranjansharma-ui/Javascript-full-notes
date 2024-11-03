// for of

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greeeting = "Hello world!"
for (const greet of greeeting) {
    // console.log(`Each char is ${greet}`);
    
}

//Maps

const map = new Map() // unique
map.set('delhi',"de")
map.set('Usa',"U")
map.set('bihar',"b")
map.set('delhi',"de")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const myObj = {
    'Game': 'NFs',
    'Game2': 'Spider'
}

// for (const [key,value] of myObj) {
//     console.log(key, ':-', value);
    
// }




