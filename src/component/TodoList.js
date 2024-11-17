import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../actions";
import Todo from "./Todo";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos } = this.props.data;

    return (
      <ul className="todo-list">
        {todos && todos.length ? (
          todos.map((todo, index) => (
            <Todo key={`todo-${index}`} todo={todo} />
          ))
        ) : (
          "No todos, yay!"
        )}
      </ul>
    );
  }
}

const mapStateToProps = ({ data = {} }) => ({
  data,
});

export default connect(
  mapStateToProps,
  { fetchTodos }
)(TodoList);
