let body = document.querySelector("body");


let myLibrary = [
    new Book("It", "Stephen King", 1116, true),
    new Book("Pimp: The Story of My Life ", "Iceberg Slim", 311, true),
    new Book("The Hobbit", "J.R.R. Tolkien", 366, true),
    new Book("The Gunslinger", "Stephen King", 231, true)
];

function Book(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = parseInt(pages);
    this.read = read;
}

// Book.prototype.addBookToLibrary = 
document.querySelector('form').addEventListener('submit', (e) => {
    const formData = new FormData(e.target);
    let read = false;
    let properties = []
    formData.forEach(entry => {
        properties.push(entry)
    });

    read = properties[properties.length-1] == "on";
    if(read){
        properties.pop();
        properties.push(read);
    }

    myLibrary.push(new Book(...properties));
    addBookToLibrary();
    e.target.reset();
    event.preventDefault();

});


function addBookToLibrary(){
    let libraryDiv = document.querySelector('#library');
    libraryDiv.textContent = "";
    let bookShelf = document.createElement('div');
    bookShelf.classList.add('book-shelf');
    libraryDiv.appendChild(bookShelf);
    
    let newRow = 0;
    myLibrary.forEach(book => {
        
        if (newRow == 4){
            bookShelf = document.createElement('div');
            bookShelf.classList.add('book-shelf');
            libraryDiv.appendChild(bookShelf);
            newRow = 0;
        }
        let bookDiv = document.createElement('div');
        let title = document.createElement('h3');
        let author = document.createElement('p');
        let pages = document.createElement('p');
        let read = document.createElement('p');
        let remove = document.createElement('button');
        
    
        bookDiv.classList.add('book');
        title.classList.add('title');
        author.classList.add('author');
        pages.classList.add('pages');
    
        title.textContent = book.title;
        author.textContent = `Author: ${book.author}`;
        pages.textContent = `${book.pages} pages`;
        read.textContent = book.read? "Read": "Not read yet";
        remove.textContent = "Remove";

        remove.addEventListener('click', e=>{
            myLibrary.splice(myLibrary.indexOf(book),1);
            console.log(myLibrary);
            addBookToLibrary();
        })

    
        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(pages);
        bookDiv.appendChild(read);
        bookDiv.appendChild(remove);
    
        bookShelf.appendChild(bookDiv);
        newRow ++;
    
    });
}
// addBookToLibrary.prototype = Object.create(Book.property);

body.addEventListener('load', addBookToLibrary());

function render() {

}