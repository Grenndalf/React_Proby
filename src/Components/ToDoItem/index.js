import React, { Component } from "react";

class ToDoItem extends Component {
  state = {
    done: false,
  };

  doneToggle = () => {
    this.setState({ done: !this.state.done });
  };

  render() {
    const hmm = this.props.task.text;
    return (
      <div
        onClick={this.doneToggle}
        className={this.state.done ? "done" : "yeah"}
      >
        <p> {hmm} </p>
      </div>
    );
  }
}
export default ToDoItem;
