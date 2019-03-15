import React from "react";
import { connect } from "react-redux";

export const BookDetail = props => {
  if (!props.selectedBook) {
    return <div> Search for Books.. </div>;
  }
  const { selfLink, volumeInfo } = props.selectedBook;
  return (
    <div className="ui container" style={{ width: '50%', border: "2px solid green" }}>
      <p>{selfLink}</p>
      {<p>{volumeInfo.title}</p>}
      {<p>{volumeInfo.subtitle}</p>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedBook:
      state.BookList &&
      state.BookList.selectedBook &&
      state.BookList.selectedBook.book
  };
};

export default connect(mapStateToProps)(BookDetail);
