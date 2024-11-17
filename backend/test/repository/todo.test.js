const repository = require('../../src/repository/todo');

describe('TODO repository', () => {
  it('should return the todo list', async () => {
    const expected = {
      todos: [
        {
          task: "This is a todo example"
        }
      ]
    };

    const actual = await repository.getTodos();
    expect(actual).toEqual(expected);
  });

  it('should add a new todo to the list', async () => {
    const newTask = "Test new todo task";
    
    const addedTodo = await repository.addTodo(newTask);
    expect(addedTodo).toHaveProperty('task', newTask);

    const todos = await repository.getTodos();
    expect(todos.todos.length).toBeGreaterThan(1);
  });

  it('should reject adding a todo with no task', async () => {
    await expect(repository.addTodo('')).rejects.toThrow('Task is required');
  });
});
