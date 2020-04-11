import React, { useState } from "react";
import Todo from "./Todo";

function TodoList(props) {
    const [todoList, setTodoList] = useState(["orzeł 1","dupa 2","osioł 3"]);
  return (
    <div>
      Moja aplikacja todo
      <Todo />
      {todoList.map(() => (
          <Todo />
      ))}
    </div>
  );
}

export default TodoList;
