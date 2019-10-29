import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Counter extends Component {
  styles = {
    fontSize: 10,
    fontWeight: "Bold"
  };

  formatCount() {
    // console.log("props", this.state.value);
    const count = this.props.value;
    //console.log(this.state);
    return count === 0 ? "Zero" : count;
  }
  render() {
    //console.log("props", this.props.value);
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.id)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}
