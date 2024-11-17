import React, { useState } from "react";
import TodoList from "./component/TodoList";
import AddTodo from "./component/AddTodo";
import "./styles.css";

export default function TodoApp() {
  const [showTable, setShowTable] = useState(true);

  const toggleView = () => {
    setShowTable(!showTable);
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div>
        <button onClick={toggleView}>
          {showTable ? "Add Todo" : "Show Todos"}
        </button>
      </div>
      <div>
        {showTable ? (
          <TodoList />
        ) : (
          <AddTodo />
        )}
      </div>
    </div>
  );
}
