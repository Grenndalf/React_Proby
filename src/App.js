import React, { Component } from "react";
import "./App.css";
import ToDoList from "./Containers/ToDoList"

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
