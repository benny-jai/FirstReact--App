import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
class App extends Component {
  state = {
    counters: [{ id: 1, value: 1 }, { id: 2, value: 2 }, { id: 3, value: 0 }]
  };
  handleIncrement = counter => {
    //console.log("increment called", counter);

    const counters = [...this.state.counters];
    const index = counters.findIndex(obj => obj.id === counter);
    counters[index].value++;
    //counters[index].id.value++;
    console.log(index);
    this.setState({ counters });
  };
  getIndex(id) {
    const counters = [...this.state.counters];
    return counters.findIndex(obj => obj.id === id);
  }
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    console.log(counters);
    this.setState({ counters: counters });
  };
  handleDelete = id => {
    console.log("event handle called", id);
    const counters = this.props.counters.filter(c => c.id !== id);
    this.setState({ counters: counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounter={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
