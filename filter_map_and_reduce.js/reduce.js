const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval

// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2000
    },
    {
        itemName: "python",
        price: 3400
    },
    {
        itemName: "data science",
        price: 25000
    }
]

const priceTopay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)
console.log(priceTopay);