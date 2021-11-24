const { book, bookService } = require("./app");

// test("create a new book", () => {
//     expect(new book("zuby", "hello", 2017)).toBe()
// })

test("create a new book", () => {
    expect(bookService.createNewBook()).not.toBeNull();
})

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
    expect(bookService.getAllBooks()).toEqual();
});

test("get a book by name", () => {
    
})
