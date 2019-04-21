import React, { Component } from "react";
import "./user-card.css";
import UserField from "./user-field/user-field";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closed: true
    };

    this.toggleClosed = this.toggleClosed.bind(this);
  }

  toggleClosed() {
    this.setState({ closed: !this.state.closed });
  }

  render() {
    return (
      <article className="user-card-wrapper" onClick={this.toggleClosed}>
        <header className="user-card-header">
          <h2 className="user-name">{this.props.user.name}</h2>
        </header>
        <div className={"user-card-content "}>
          <UserField info="Email" value={this.props.user.email} />
          <UserField
            info="Address"
            value={`${this.props.user.address.street} ${
              this.props.user.address.suite
            }`}
          />
          <UserField info="Phone" value={this.props.user.phone} />
          <UserField info="Website" value={this.props.user.website} />
          <UserField info="Company" value={this.props.user.company.name} />
        </div>
        <footer className="user-card-footer">
          <a
            tabIndex={this.props.tabIndex}
            href={`mailto:${this.props.user.email}`}
            className="message-button"
          >
            Send Email
          </a>
        </footer>
      </article>
    );
  }
}

export default UserCard;
