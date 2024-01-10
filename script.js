const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const book = new Book(
        'Crime And Punishment',
        'Fyodor Dostoevsky',
        295,
        true);

    myLibrary.push(book)
    console.log(myLibrary)
}

addBookToLibrary()