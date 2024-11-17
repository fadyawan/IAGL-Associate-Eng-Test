const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos();
    },

    addTodo: async (task) => {
      if (!task || typeof task !== 'string') {
        throw new Error("Task must be a non-empty string");
      }
      return await repository.addTodo(task);
    },
  };
};

module.exports = todoService;
