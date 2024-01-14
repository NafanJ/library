const button = document.getElementById("add-book")
const bookList = document.querySelector('.book-list');
let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book)
}
/*
for (let i = 0; i < 20; i++) {
    addBookToLibrary(
        'Crime And Punishment',
        'Fyodor Dostoevsky',
        720,
        true
    );

    addBookToLibrary(
        '1984',
        'George Orwell',
        449,
        false
    );

    addBookToLibrary(
        'To Kill A Mockingbird',
        'Harper Lee',
        398,
        true
    );
}*/


function createTextElement(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    return element;
}

function createBookCard(book, index) {
    const card = document.createElement('div');
    card.className = 'card';

    const titleElement = createTextElement('p', 'title', book.title);
    const authorElement = createTextElement('p', 'author', book.author);
    const pagesElement = createTextElement('p', 'pages', `${book.pages} pages`);
    const readElement = createTextElement('p', 'read', book.read);

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        myLibrary.splice(index, 1);
        saveBooks();
        displayBooks();
    });

    card.appendChild(titleElement);
    card.appendChild(authorElement);
    card.appendChild(pagesElement);
    card.appendChild(readElement);
    card.appendChild(removeButton);

    return card;
}

function displayBooks() {
    bookList.innerHTML = '';
    myLibrary.forEach((book, index) => {
        const card = createBookCard(book, index);
        bookList.appendChild(card);
    });
}

// Try to load books from localStorage or initialize an empty array
myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];

// Function to save current state of books to localStorage
function saveBooks() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

displayBooks();


// Modal Logic 

// Initialize an empty array to store book objects
var books = [];

// Get modal element
var modal = document.getElementById("myModal");

// Get button that opens the modal
var btn = document.getElementById("add-book");

// Get the element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
document.getElementById("bookForm").onsubmit = function(event) {
    event.preventDefault();

    // Create a new book object from form data
    var newBook = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        pages: document.getElementById("pages").value,
        read: document.getElementById("status").value
    };

    // Add the new book to the array
    myLibrary.push(newBook);

    // Optional: console log to see the updated books array
    console.log(myLibrary);

    // Save books to localStorage
    saveBooks();

    // Close the modal
    modal.style.display = "none";

    // Reset the form for the next input
    this.reset();

    displayBooks()
}