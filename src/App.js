import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import MyBooks from "./MyBooks";
import SearchBooks from "./SearchBooks";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
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

  changeBookShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      this.setState((currenState) => ({
        books: currenState.books.filter((b) => {
          b.id === book.id && (b.shelf = newShelf);
          return b;
        }),
      }));
    });
  };

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks changePage={this.changePage} />
        ) : (
          <MyBooks
            changePage={this.changePage}
            allBooks={this.state.books}
            changeBookShelf={this.changeBookShelf}
          />
        )}
      </div>
    );
  }
}

export default BooksApp;
