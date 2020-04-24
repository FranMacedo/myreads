import React, { Component } from "react";

class Book extends Component {
  handleChange = (newShelf) => {
    this.props.changeShelf(newShelf);
  };

  render() {
    const book = this.props.book;
    const title = book.title ? book.title : "";
    const authors = book.authors ? book.authors : [""];
    const image = book.imageLinks
      ? 'url("' + book.imageLinks.thumbnail + '")'
      : "";
    const shelf = book.shelf ? book.shelf : "none";

    return (
      <li>
        {console.log(authors)}
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: image,
              }}
            />
            <div className="book-shelf-changer">
              <select
                defaultValue={shelf}
                onChange={(event) => this.handleChange(event.target.value)}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">none</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">
            {authors.map((author, index, arr) => {
              return index === arr.length - 1 ? author : author + ", ";
            })}
          </div>
          <div />
        </div>
      </li>
    );
  }
}

export default Book;
