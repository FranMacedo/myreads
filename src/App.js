import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import MyBooks from "./MyBooks";
import SearchBooks from "./SearchBooks";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    searchedBooks: [],
    showSearchPage: false,
  };
  changePage = (goToSearchPage) => {
    this.setState({ showSearchPage: goToSearchPage });
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

  checkBookInShelf = (searchBook) => {
    const ourBooks = this.state.books;

    for (let book of ourBooks) {
      if (searchBook.id === book.id) {
        return [true, book];
      }
    }

    return [false, searchBook];
  };

  changeBookShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf;
      this.checkBookInShelf(book)[0]
        ? this.setState((currenState) => ({
            books: currenState.books.filter((b) => {
              b.id === book.id && (b.shelf = newShelf);
              return b;
            }),
          }))
        : this.setState((currenState) => ({
            books: currenState.books.concat([book]),
          }));
    });
  };

  checkBooksQuery = (books) => {
    return !books // if it is undefined, no books available
      ? []
      : Array.isArray(books) // if it is an array, some books available!
      ? books
      : "error" in books // if it's not an array, it's an object and can be error message or maybe just one book?
      ? [] // if is error, no book is stored in state
      : [books]; //otherwise, it's just a lonely book
  };

  queryBooks = (query) => {
    query.trim() // only query API if any search in string
      ? BooksAPI.search(query).then((books) => {
          const searchedBooks = this.checkBooksQuery(books);
          const booksWithShelf = searchedBooks.map(
            (searchBook) => this.checkBookInShelf(searchBook)[1]
          );
          this.setState({
            searchedBooks: booksWithShelf,
          });
        })
      : this.setState({ searchedBooks: [] });
  };
  deleteSearchedBooks = () => {
    this.setState({ searchedBooks: [] });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <MyBooks
              allBooks={this.state.books}
              changeBookShelf={this.changeBookShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              getQueryBooks={this.queryBooks}
              searchedBooks={this.state.searchedBooks}
              changeBookShelf={this.changeBookShelf}
              deleteSearchedBooks={this.deleteSearchedBooks}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
