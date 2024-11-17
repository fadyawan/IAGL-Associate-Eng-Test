let todoList = {
  todos: [
    {
      task: "This is a todo example",
    }
  ],
};

module.exports = {
  getTodos: () => Promise.resolve(todoList),

  addTodo: (task) => {
    if (!task) {
      return Promise.reject(new Error("Task is required"));
    }
    const newTodo = { task };
    todoList.todos.push(newTodo);
    return Promise.resolve(newTodo);
  },
};
