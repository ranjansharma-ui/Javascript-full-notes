const book = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1980, edition: 20010},
    {title: 'Book Three', genre: 'History', publish: 1990, edition: 2009},
    {title: 'Book four', genre: 'Science', publish: 1906, edition: 2008},
    {title: 'Book five', genre: 'Fiction', publish: 1987, edition: 2004},
    {title: 'Book six', genre: ' Science', publish: 2009, edition: 2003},
    {title: 'Book seven', genre: 'Non-Fiction', publish: 2006, edition: 2014}
    
]

let userBooks = book.filter( (bk) => bk.genre === 'Science')

userBooks = book.filter( (bk) => {
    return bk.publish >= 1900 && bk.genre === 'Science'})
console.log(userBooks);
