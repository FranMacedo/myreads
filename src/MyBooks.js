import React from "react";
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

function MyBooks(props) {
  const { allBooks, changeBookShelf } = props;
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
              booksInShelf={allBooks.filter(
                (book) => book.shelf === "currentlyReading"
              )}
              changeBookShelf={changeBookShelf}
            />
            <BookShelf
              bookShelfTitle="Want to Read"
              booksInShelf={allBooks.filter(
                (book) => book.shelf === "wantToRead"
              )}
              changeBookShelf={changeBookShelf}
            />
            <BookShelf
              bookShelfTitle="Read"
              booksInShelf={allBooks.filter((book) => book.shelf === "read")}
              changeBookShelf={changeBookShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" className="button-to-search">
            Add a book
          </Link>
        </div>
      </div>
    </div>
  );
}

MyBooks.propTypes = {
  allBooks: PropTypes.array.isRequired,
  changeBookShelf: PropTypes.func.isRequired,
};

export default MyBooks;
