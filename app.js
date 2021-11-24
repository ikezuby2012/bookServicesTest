let books = [];

function book(name, author, yearOfPub) {
    this.name = name;
    this.author = author;
    this.yearOfPub = yearOfPub;
}

book.prototype = {
    getName: function () {
        console.log(`the name of book is -- ${this.name}`);
    },
    getAuthor: function () {
        console.log(`the name of author is -- ${this.author}`);
    },
    getYearOfPub: function () {
        console.log(`the year of publication is -- ${this.yearOfPub}`);
    },
    getDetails: function () {
        console.log(`
        the name of book is -- ${this.name},
        the name of author is -- ${this.author},
        the year of publication is -- ${this.yearOfPub}`);
    }
}

const bookService = (function () {
    let _book;
    let borrowedBooks = [];

    return {
        createNewBook: function (name, author, yearOfPub) {
            let newBook = new book(name, author, yearOfPub);
            books.push(newBook);
            return newBook;
        },
        getBookByName: function (name) {
            _book = books.filter(book => book.name === name);
            return _book;
        },
        getAllBooks: function () {
            for (let book of books) {
                console.log(book);
            }
            return books;
        },
        borrowBook: function (name) {
            //check if book exist
            for (let book of books) {
                if (book.name === name) {
                    _book = book;
                }
            }
            console.log(_book);

            if (_book) {
                borrowedBooks.push(_book);
                console.log("you have just borrowed a book!");
                // remove from store
                books = books.filter(book => book.name !== name);
                console.log("borrowed books");
                console.log(borrowedBooks);
                return borrowedBooks;
            } else {
                console.log("book does not exist!");
            }
        },
        returnBorrowedBook: function (name) {
            // check if book exist in borrowedbooks array
            for (let book of books) {
                if (book.name === name) {
                    _book = book;
                }
            }
            // if it exists
            if (_book) {
                //then remove book from borrowedBooks
                _book = borrowedBooks.filter(book => book.name !== name);
                console.log("you just returned a borrowed book!");
                //add to books
                books.push(_book);
                console.log(borrowedBooks);
                return borrowedBooks;
            } else {
                console.log("operation failed!")
            }
        }
    }
})();

const newBook = bookService.createNewBook("test1", "testAuthor1", 2001);
const newBook2 = bookService.createNewBook("test2", "testAuthor2", 2002);
const newBook3 = bookService.createNewBook("test3", "testAuthor3", 2003);
const newBook4 = bookService.createNewBook("test4", "testAuthor4", 2004);
const newBook5 = bookService.createNewBook("test5", "testAuthor5", 2005);
// bookService.getAllBooks();
// bookService.getBookByName("test5");
bookService.borrowBook("test2");
bookService.borrowBook("test4");

bookService.returnBorrowedBook("test4");
module.exports = {
    book: book,
    books,
    bookService
}
