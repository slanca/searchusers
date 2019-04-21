import React, { Component } from "react";
import "./search-input.css";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div className="search-input-wrapper">
        <input
          tabIndex="1"
          placeholder="Name, email, phone"
          autoFocus={true}
          type="text"
          className="search-input"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchInput;
