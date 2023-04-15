class PrintEditionItem {
    
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
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
        constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "detective";
    }
}

//
/* Task 2*/
//

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
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

function Student(name) {
    this.name = name;
    this.marks = {};
}
  
 
  Student.prototype.addMark = function (mark, subjectName) {
    if (mark < 2 || mark > 5) {
        return;
      }        

    if (subjectName in this.marks) {
        this.marks[subjectName].push(mark);
        } else {
            this.marks = Object.assign(this.marks, {[subjectName]: [mark]});
            }
} 

  Student.prototype.getAverageBySubject = function (subjectName) {
    let avgMark = 0;
    if (this.marks[subjectName] === undefined) {
      return avgMark;
      } else {
        let sumMarks = (this.marks[subjectName].reduce((acc, item) => acc + item, 0));
        avgMark = sumMarks / this.marks[subjectName].length;
    }
    return avgMark;
  }
  
  Student.prototype.getAverage = function () {
    let allSubject = Object.keys(this.marks);
    let summ = allSubject.reduce((acc, item) => acc + this.getAverageBySubject(item), 0);
    if (summ === 0) {
        return 0;
    } else {
        return summ / allSubject.length;
    }
  }
  