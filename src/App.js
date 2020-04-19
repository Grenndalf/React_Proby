import React, { Component } from "react";
import "./App.css";

class Spany extends Component {
  // render() {
  //   const { text1 } = this.props.display;
  //   return <span className="yeah">{text1}</span>;
  // }
}

class ToDoList extends Component {
  state = {
    tasks: this.props.tasks,
    draft: "",
  };
  upadateDraft = (event) => {
    this.setState({ draft: event.target.value });
  };
  addToDo = () => {
    const list = this.state.tasks;
    list.push(this.state.draft);
    this.setState({ tasks: list, draft: "" });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <div>
          <p>Naucz sie kuźwa propsów i state'ów</p>
        </div>
        <div className="flexer">
          {this.state.tasks.map((task) => (
            <span className='yeah'>{task}</span>
          ))}
          <input
            className="myInput App"
            type="text"
            maxLength="10"
            onChange={this.upadateDraft}
            value={this.state.draft}
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
 
  render() {
    return (
      <div>
        <ToDoList title="my Stuff!" tasks={[]} />
      </div>
    );
  }
}

export default App;
