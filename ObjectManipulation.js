// 2.Task: Object Manipulation
// Array of book objects
const books = [
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960
    },
    {
        title: '1984',
        author: 'George Orwell',
        year: 1949
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925
    },
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        year: 1813
    },
    {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        year: 1951
    }
];

// Print the array of books



const getBooksTitles = (books) => {
    return books.map(item => item.title)
}

const title = getBooksTitles(books)


console.log("original array=", books, "new array of name =", title)