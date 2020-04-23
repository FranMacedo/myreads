import React, { Component } from "react";

class Book extends Component {
  handleChange = (newShelf) => {
    this.props.changeShelf(newShelf);
  };
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: this.props.bookImage,
              }}
            />
            <div className="book-shelf-changer">
              <select
                defaultValue={this.props.value}
                onChange={(event) => this.handleChange(event.target.value)}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.bookTitle}</div>
          <div className="book-authors">{this.props.bookAuthor}</div>
        </div>
      </li>
    );
  }
}

export default Book;
