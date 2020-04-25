import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import { Link } from "react-router-dom";

class SearchBooks extends Component {
  state = {
    query: "",
  };

  updateQuery = (query) => {
    this.setState({ query: query });
    query && this.props.getQueryBooks(query);
    this.props.getQueryBooks(query);
  };

  onChangeShelf = (book, newShelf) => {
    this.props.changeBookShelf(book, newShelf);
  };

  render() {
    const { searchedBooks, deleteSearchedBooks } = this.props;
    const query = this.state;

    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search" onClick={deleteSearchedBooks}>
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {searchedBooks && searchedBooks.length !== 0 && query !== ""
                ? searchedBooks.map((book) => (
                    <Book
                      book={book}
                      key={book.id}
                      changeShelf={(newShelf) =>
                        this.onChangeShelf(book, newShelf)
                      }
                    />
                  ))
                : ""}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

SearchBooks.propTypes = {
  searchedBooks: PropTypes.array.isRequired,
  getQueryBooks: PropTypes.func.isRequired,
  changeBookShelf: PropTypes.func.isRequired,
  deleteSearchedBooks: PropTypes.func.isRequired,
};

export default SearchBooks;
