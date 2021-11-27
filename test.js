const { books, book, bookService } = require("./app");

test("books array exists", () => {
    expect(books).toBeDefined();
})

test("book services exist", () => {
    expect(bookService).toBeDefined();
});

test("create a new book", () => {
    expect(bookService.createNewBook("underwater", "tom peters", 2017)).toEqual({
        "name": "underwater",
        "author": "tom peters",
        "yearOfPub": 2017
    });
})

test("get all books", () => {
    const newBook = bookService.createNewBook("test1", "testAuthor1", 2001);
    const newBook2 = bookService.createNewBook("test2", "testAuthor2", 2002);
    const newBook3 = bookService.createNewBook("test3", "testAuthor3", 2003);
    const newBook4 = bookService.createNewBook("test4", "testAuthor4", 2004);
    const newBook5 = bookService.createNewBook("test5", "testAuthor5", 2005);
    expect(bookService.getAllBooks()).toEqual(
        expect.arrayContaining([
            expect.objectContaining(newBook)
        ])
    );
});

test("get a book by name", () => {
    expect(bookService.getBookByName("test5")).toEqual(
        expect.arrayContaining([
            expect.objectContaining({ name: 'test5', author: 'testAuthor5', yearOfPub: 2005 })
        ]));
})

test("borrow book", () => {
    bookService.borrowBook("test2");
    bookService.borrowBook("test5");
    expect(bookService.borrowBook("test5")).toEqual(
        expect.arrayContaining([
            expect.objectContaining({ name: 'test5', author: 'testAuthor5', yearOfPub: 2005 })
        ]));
});

test("return borrowed book", () => {
    expect(bookService.returnBorrowedBook).toBeDefined();
    expect(bookService.returnBorrowedBook("test5")).toEqual(
        expect.arrayContaining([
            expect.objectContaining({ name: 'test5', author: 'testAuthor5', yearOfPub: 2005 })
        ]));
})