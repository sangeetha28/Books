import React, { Component } from "react";
import { fetchBooks } from "../actions/fetchBooks";
import { connect } from "react-redux";


class Search extends Component {

  state = {term: ''}

  componentWillUnmount() {
    clearTimeout();
  }


  handleKeyPress(event) {
    if(event.key === 'Enter'){
      this.props.fetchBooks(this.state.term)
    }
  }

  onChangeInput(event) {
    this.setState({term : event.target.value})
  }

  render() {
    return (
      <div style={{ width: "100%" }} className="ui category search">
        <div className="ui icon input">
          <input
            className="prompt"
            style={{ width: "100%", textAlign: "center" }}
            type="text"
            value={this.state.term}
            onChange={(event) => {this.onChangeInput(event)}}
            onKeyPress ={event => this.handleKeyPress(event)}
            placeholder="Enter search term..."
          />
          <div className="results" />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchBooks }
)(Search);
