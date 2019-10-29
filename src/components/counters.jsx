import React, { Component } from "react";
import Counter from "../components/counter";
import "bootstrap/dist/css/bootstrap.css";
class Counters extends Component {
  render() {
    return (
      <div>
        <button className="btn-primary btm-sm m-2" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            selected={true}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onReset={this.props.onReset}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
