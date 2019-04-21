import React, { Component } from "react";
import "./App.css";

import SearchPage from "./containers/search-page/search-page";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchPage />
      </div>
    );
  }
}

export default App;
