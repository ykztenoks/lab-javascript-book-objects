// Iteration 1 | Books Array

// Book 1
// title: The Old Man and the Sea
// pages: 128
// author: Ernest Hemingway
// details: {
//    language: English
//    description: One of Hemingway's most famous works, it tells the story of Santiago...
// }

// Book 2
// title: The Airbnb Story
// pages: 256
// author: Leight Gallagher
// details: {
//    language: English
//    description: This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...
// }

// Book 3
// title: Educated - A Memoir
// pages: 352
// author: Tara Westover
// details: {
//    language: English
//    description: Educated is an account of the struggle for self-invention...
// }

// Book 4
// title: The Art of Learning
// pages: 288
// author: Josh Waitzkin
// details: {
//    language: English
//    description: The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.
// }

// Your code here:
const booksArray = [
  {
    title: " harry potter",
    pages: 800,
    author: "JK Rowling",
    details: {
      language: "English",
      description: "harrys a wizard!",
    },
  },
  {
    title: "lord of the rings",
    pages: 1222,
    author: "Tolkien",
    details: {
      language: "English",
      description: "frodo is short",
    },
  },
  {
    title: "book",
    pages: 2,
    author: "The author",
    details: {
      language: "English",
      description: "This is a book",
    },
  },
  {
    title: "not a book",
    pages: 0,
    author: "no author",
    details: {
      language: null,
      description: "this is a just a piece of paper",
    },
  },
]

// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
  return `${book.title} - ${book.author} - ${book.pages} pages`
}

booksArray.forEach((book) => console.log(getBookDetails(book)))

// Iteration 3 | Delete Language
// Your code here:
for (let i = 0; i < booksArray.length; i++) {
  delete booksArray[i].details.language
}

console.log(booksArray)
// Iteration 4 | Estimated Reading Time
// Your code here:
booksArray.forEach(
  (book) => (book.readingTime = Math.ceil((book.pages * 500) / 90))
)

console.log(booksArray)
// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
const bookDictionary = {
  "J. K. Rowling": [
    ["Harry Potter and the Philosopher's Stone", 223],
    ["Harry Potter and the Chamber of Secrets", 251],
    ["Harry Potter and the Prisoner of Azkaban", 317],
    ["Harry Potter and the Goblet of Fire", 636],
  ],
  "Neal Stephenson": [
    ["Cryptonomicon", 928],
    ["Anathem", 1008],
    ["Fall; or, Dodge in Hell", 896],
  ],
  "Malcolm Gladwell": [
    ["Outliers", 320],
    ["Blink", 287],
  ],
}

function booksByAuthor(dictionary) {
  // Your code here:
  //define an empty array
  const booksAuthor = []

  //we loop over the dictionary object
  for (let key in dictionary) {
    //inside the dictionary loop, we loop over the 2d arrays
    dictionary[key].forEach((element) =>
      //push a newly created object to our empty array, using the values from dictionary
      booksAuthor.push({ title: element[0], author: key, pages: element[1] })
    )
  }
  return booksAuthor
}

console.log(booksByAuthor(bookDictionary))

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArr) {
  // Your code here:
  const pagesTotal = booksArr.reduce((acc, book) => acc + book.pages)

  return pagesTotal / booksArr.length
}

console.log(averagePageCount(booksArray))
