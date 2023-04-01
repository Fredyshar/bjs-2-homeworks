class PrintEditionItem {
    
    constructor (name, releaseDate, pagesCount, state, type) {
        state = 100;
        type = null;
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = null;
 
    }

    fix() {
        this.state *= 1.5;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
            } else {
                this._state = state;
            }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
        constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "detective";
    }
}

//
/* Task 2*/
//

class Library {
    constructor(name, books) {
        books = [];
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    
    findBookBy(type, value) {
        let searchedBooks = this.books.filter(book => book[type] === value);
        if (searchedBooks.length === 0) {
            return null;
            } 
        return searchedBooks[0];
    }

    giveBookByName(bookName) {
        let result = null;
        for (let book of this.books) {
            if (book.name === bookName) {
                result = book;
                this.books = this.books.filter((item) => item !== book)
            } 
        }
        return result;
    }

} 
