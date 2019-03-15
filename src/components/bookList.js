import React, { Component } from "react";
import { selectedBook } from "../actions/selectedBook";
import { fetchBooks } from "../actions/fetchBooks";
import { connect } from "react-redux";

class BookList extends Component {
  state = { bookDetails: [] };

  handleOnClick = book => {
    this.props.selectedBook({ book });
  };

  render() {
    return (
      <div>
        {this.props.booksData.map((book, index) => {
          return (
            <div
              key={book.id}
              style={{
                display: "flex",
                alignItems: "left",
                justifyContent: 'space-between',
                borderBottom: "0.25px solid grey"
              }}
            >
              <div style={{ margin: "10px" }}>{book.volumeInfo.title}</div>
              <br />{" "}
              <button
                className="positive ui button"
                onClick={() => this.handleOnClick(book)}
              >
                More Info
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    booksData: state.BookList.booksData
  };
};

export default connect(
  mapStateToProps,
  { selectedBook, fetchBooks }
)(BookList);
