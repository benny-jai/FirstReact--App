import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounter}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
