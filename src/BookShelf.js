import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends Component {
  onChangeShelf = (book, newShelf) => {
    this.props.changeBookShelf(book, newShelf);
  };
  render() {
    const { bookShelfTitle, booksInShelf } = this.props;

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{bookShelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {booksInShelf.map((book) => (
                <Book
                  key={book.id}
                  bookImage={'url("' + book.imageLinks.thumbnail + '")'}
                  bookTitle={book.title}
                  bookAuthor={book.authors}
                  value={book.shelf}
                  changeShelf={(newShelf) => this.onChangeShelf(book, newShelf)}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default BookShelf;
