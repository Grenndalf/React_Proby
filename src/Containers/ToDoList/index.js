import React, { Component } from "react";
import NewToDoForm from "./../../Components/NewToDoForm";
import ToDoItem from "./../../Components/ToDoItem";

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
        <h1> {title} </h1>
        <div>
          <p> Naucz sie kuźwa propsów i state 'ów</p>{" "}
        </div>
        <div className="flexer">
          {this.state.tasks.map((task) => (
            <ToDoItem task={task} />
          ))}
          <NewToDoForm
            onSubmit={this.addToDo}
            onChange={this.updateDraft}
            draft={draft}
          />
        </div>
      </div>
    );
  }
}

export default ToDoList;
