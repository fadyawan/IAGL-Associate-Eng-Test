describe('TODO Service', () => {
  it('should be able to get todos from repository', async () => {
    const expected = {
      todos: [
        {
          task: "This is a task to be done"
        }
      ]
    };

    const todoRepository = {
      getTodos: async () => Promise.resolve(expected)
    };

    const todoService = require('../../src/service/todo')(todoRepository);
    const actual = await todoService.getTodos();
    expect(actual).toEqual(expected);
  });

  it('should throw an error if repository fails to fetch todos', async () => {
    const errorMessage = "Failed to fetch todos";
    const todoRepository = {
      getTodos: async () => Promise.reject(new Error(errorMessage))
    };

    const todoService = require('../../src/service/todo')(todoRepository);
    await expect(todoService.getTodos()).rejects.toThrow(errorMessage);
  });

  it('should add a new todo via the repository', async () => {
    const newTask = "Test new todo task";
    const expected = { id: Date.now(), task: newTask };
    const todoRepository = {
      addTodo: async (task) => Promise.resolve(expected)
    };

    const todoService = require('../../src/service/todo')(todoRepository);
    const actual = await todoService.addTodo(newTask);
    expect(actual).toHaveProperty('task', newTask);
    expect(actual).toHaveProperty('id');
  });

  it('should throw an error if adding a todo with an invalid task', async () => {
    const errorMessage = "Task must be a non-empty string";
    const todoRepository = {
      addTodo: async () => Promise.reject(new Error(errorMessage))
    };

    const todoService = require('../../src/service/todo')(todoRepository);
    await expect(todoService.addTodo('')).rejects.toThrow(errorMessage);
  });
});
