import React, { Component } from "react";
import BookShelf from "./BookShelf";

class MyBooks extends Component {
  render() {
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf
                bookShelfTitle="Currently Reading"
                booksInShelf={this.props.allBooks.filter(
                  (book) => book.shelf === "currentlyReading"
                )}
                changeBookShelf={this.props.changeBookShelf}
              />
              <BookShelf
                bookShelfTitle="Want to Read"
                booksInShelf={this.props.allBooks.filter(
                  (book) => book.shelf === "wantToRead"
                )}
                changeBookShelf={this.props.changeBookShelf}
              />
              <BookShelf
                bookShelfTitle="Read"
                booksInShelf={this.props.allBooks.filter(
                  (book) => book.shelf === "read"
                )}
                changeBookShelf={this.props.changeBookShelf}
              />
            </div>
          </div>
          <div className="open-search">
            <button onClick={() => this.props.changePage(true)}>
              Add a book
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyBooks;