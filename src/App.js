import React, { Component } from "react";
import BookList from "./components/bookList";
import BookDetail from "./components/bookDetail";
import Search from "./components/search";
import { connect } from "react-redux";

import "./components/bookList";

class App extends Component {
 
  render() {
    return (
      <div style={{width: '100%'}}className="ui container">
      <div style={{ textAlign: "center" , margin:'20px'}}>
        <h1 style={{backgroundColor:'green',color: 'white'}}> Online Book Store </h1>
        <Search />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {this.props.booksData  && <BookList />}
          {this.props.selectedBook && <BookDetail />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
 booksData : state.BookList && state.BookList.booksData,
 selectedBook: state.BookList && state.BookList.selectedBook
});


export default connect(
  mapStateToProps,
 null
)(App);
