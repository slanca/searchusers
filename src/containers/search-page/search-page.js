import React, { Component } from "react";

import SearchInput from "../../components/search-input/search-input";
import UserCard from "../../components/user-card/user-card";

import "./search-page.css";
const axios = require("axios");
const _ = require("lodash");

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.onSearchInputChange = this.onSearchInputChange.bind(this);

    this.state = {
      users: [],
      usersResult: [],
      displayHint: true
    };
  }

  componentWillMount() {
    axios.get("http://jsonplaceholder.typicode.com/users").then(response => {
      this.setState({ users: response.data });
    });
  }

  filterUsersResult(searchValue) {
    const result = [
      ...this.state.users.filter(
        user =>
          user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.email.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.phone.toLowerCase().includes(searchValue.toLowerCase())
      )
    ];
    this.setState({
      users: this.state.users,
      usersResult: result,
      displayHint: false
    });
  }

  onSearchInputChange(value) {
    if (!value) {
      this.setState({
        users: this.state.users,
        usersResult: [],
        displayHint: true
      });
      return;
    }
    this.filterUsersResult(value);
  }

  render() {
    const users = this.state.usersResult.map((user, index) => (
      <UserCard key={user.id} user={user} tabIndex={index + 2} />
    ));
    return (
      <div className="App">
        <SearchInput onChange={_.debounce(this.onSearchInputChange, 500)} />
        {this.state.displayHint ? (
          <h1>
            Search for someone you know.
            <br />
            Start typing now
          </h1>
        ) : this.state.usersResult.length === 0 ? (
          <h1>No results</h1>
        ) : null}
        <section className="user-list">{users}</section>
      </div>
    );
  }
}

export default SearchPage;
