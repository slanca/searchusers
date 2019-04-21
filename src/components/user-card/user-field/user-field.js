import React, { Component } from "react";
import "./user-field.css";

class UserField extends Component {
  render() {
    return (
      <div className="user-field">
        <div className="field-info">{this.props.info}</div>
        <p className="field-value">{this.props.value}</p>
      </div>
    );
  }
}

export default UserField;
