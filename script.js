const button = document.getElementById("add-book")
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = myLibrary.length
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(
        title,
        author,
        pages,
        read);
    myLibrary.push(book)
}

addBookToLibrary(
    'Crime And Punishment',
    'Fyodor Dostoevsky',
    720,
    true)
addBookToLibrary(
    '1984',
    'George Orwell',
    449,
    false)
addBookToLibrary(
    'To Kill A Mockingbird',
    'Harper Lee',
    398,
    true)

function displayBooks() {
    const bookList = document.getElementsByClassName('book-list')
    // Clear list before updating with new entries - prevents dup
    bookList[0].innerHTML = ''

    for (let i = 0; i < myLibrary.length; i++) {

        const card = document.createElement('div')
        card.className = 'card'

        const titleElement = document.createElement('p')
        titleElement.className = 'title'
        const text = document.createTextNode(myLibrary[i]['title'])
        titleElement.appendChild(text)

        const authorElement = document.createElement('p')
        const author = document.createTextNode(myLibrary[i]['author'])
        authorElement.appendChild(author)

        const pagesElement = document.createElement('p')
        const pages = document.createTextNode(myLibrary[i]['pages'] + ' pages')
        pagesElement.appendChild(pages)

        const readElement = document.createElement('p')
        const read = document.createTextNode(myLibrary[i]['read'])
        readElement.appendChild(read)

        const removeElement = document.createElement('button')
        removeElement.className = 'remove-button'
        removeElement.index = i

        const remove = document.createTextNode('Remove');
        removeElement.appendChild(remove)

        removeElement.addEventListener("click", function () {
            console.log(removeElement.index);
            if (removeElement.index > -1) {
                myLibrary.splice(removeElement.index, 1);
            }
            displayBooks()
        });

        card.appendChild(titleElement)
        card.appendChild(authorElement)
        card.appendChild(pagesElement)
        card.appendChild(readElement)
        card.appendChild(removeElement)

        bookList[0].appendChild(card)
    }
}

displayBooks();

button.addEventListener("click", function () {
    // Open Modal Here
    // @TODO: Call functions below when modal is closed probs in another function
    addBookToLibrary('Book Title', 'Author', 285, true)
    displayBooks();
    console.log(myLibrary)
});