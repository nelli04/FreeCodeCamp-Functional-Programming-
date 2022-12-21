// The global variable
let bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(list, bookName) {
  return [...list, bookName];
 } 
  // Change code above this line


// Change code below this line
function remove(list,bookName) {
    return list.filter(book => book !== bookName);
}
let newBookList = add(bookList, 'A Brief History of Time')
let neBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies')
let nBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies')
console.log(bookList)
    // Change code above this line
    
