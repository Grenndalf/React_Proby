import React, { useState } from "react";
import Todo from "./Todo";

function TodoList(props) {
  const [todoList, sedTodoList] = useState(["orzeł 1", "dupa 2", "osioł 3"]);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event)=> {
    const { value } = event.target;
   
    console.log(value);
    setInputValue(value);

  }
  return (
    <div>
      Moja aplikacja todo
      <input placeholder= "Kapitan Dupa"
      name = "Geralt: hmm"
      value={inputValue}
      onChange = {handleInputChange}/>
      {todoList.map((todo) => {
        return <Todo 
        key = {todo}
        todo={todo} />;
      })}
    </div>
  );
}

export default TodoList;
