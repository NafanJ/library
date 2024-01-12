const button = document.getElementById("add-book")
const bookList = document.querySelector('.book-list');
const myLibrary = [];

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
}


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

displayBooks();

button.addEventListener("click", function () {
    // Open Modal Here
    // @TODO: Call functions below when modal is closed probs in another function
    addBookToLibrary('Book Title', 'Author', 285, true)
    displayBooks();
    console.log(myLibrary)
});