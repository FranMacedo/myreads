import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

function BookShelf(props) {
  const { bookShelfTitle, booksInShelf, changeBookShelf } = props;

  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookShelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksInShelf.map((book) => (
              <Book
                key={book.id}
                book={book}
                changeShelf={(newShelf) => changeBookShelf(book, newShelf)}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

BookShelf.propTypes = {
  bookShelfTitle: PropTypes.string.isRequired,
  booksInShelf: PropTypes.array.isRequired,
  changeBookShelf: PropTypes.func.isRequired,
};

export default BookShelf;
