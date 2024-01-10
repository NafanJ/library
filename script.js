const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(
        title,
        author,
        pages,
        read);

    myLibrary.push(book)
}

function displayBooks() {
    console.log(myLibrary)

    for (let i = 0; i < myLibrary.length; i++) {

        const bookList = document.getElementsByClassName('book-list')

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
        const pages = document.createTextNode(myLibrary[i]['pages'])
        pagesElement.appendChild(pages)

        const readElement = document.createElement('p')
        const read = document.createTextNode(myLibrary[i]['read'])
        readElement.appendChild(read)

        card.appendChild(titleElement)
        card.appendChild(authorElement)
        card.appendChild(pagesElement)
        card.appendChild(readElement)

        bookList[0].appendChild(card)
    }
}
for (let i = 0; i < 20; i++) {
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
}

displayBooks()