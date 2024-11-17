import React from "react";
import { connect } from "react-redux";

const Todo = ({ todo }) => (
  <li className="todo-item">
    <span className="todo-item__text">
      {todo.task}
    </span>
  </li>
);

export default connect(
  null
)(Todo);
