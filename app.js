const bookList = document.querySelector('#book-list');

console.log('Book-list next sibling is: ', bookList.nextElementSibling);
console.log('Book-list next sibling is: ', bookList.previousElementSibling);
bookList.previousElementSibling.querySelector('p').innerHTML += '<br /> TOO COOL';