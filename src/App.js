import React, { Component } from "react";
import "./App.css";

class ToDoItem extends Component {
  counter = 0;
  state = {
    done: false,
    counter1: 0,
  };
  doneToggle = () => {
    this.setState({ done: !this.state.done });
  };
  componentDidMount = () => {
    this.setState({ counter1: this.counter + 5 });
  };

  render() {
    const { text } = this.props.task;
    return (
      <div
        onClick={this.doneToggle}
        className={this.state.done ? "done" : "yeah"}
      >
        <p> {text} </p>
      </div>
    );
  }
}

class ToDoList extends Component {
  state = {
    tasks: this.props.tasks,
    draft: "",
  };

  updateDraft = (event) => {
    this.setState({ draft: event.target.value });
  };

  addToDo = () => {
    const matcher = /^\s*$/;
    const list = this.state.tasks;
    if (!this.state.draft.match(matcher)) {
      list.push({ text: this.state.draft });
      this.setState({ tasks: list, draft: "" });
    }
  };

  render() {
    const { title } = this.props;
    const { draft } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <div>
          <p>Naucz sie kuźwa propsów i state'ów</p>
        </div>
        <div className="flexer">
          {this.state.tasks.map((task) => (
            <ToDoItem task={task} />
          ))}
          <input
            className="myInput App"
            type="text"
            maxLength="10"
            onChange={this.updateDraft}
            value={draft}
          />
          <button className="App" onClick={this.addToDo}>
            Dawaj heheszki
          </button>
        </div>
      </div>
    );
  }
}

class App extends Component {
  myTasks = [{ text: "orzeł 1" }, { text: "hmm" }];
  title = "jak to policzyć?";
  render() {
    return (
      <div className="main-cont">
        <ToDoList title={this.title} tasks={this.myTasks} />
      </div>
    );
  }
}

export default App;
