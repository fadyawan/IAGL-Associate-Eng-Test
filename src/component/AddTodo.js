import React, { useState } from "react";
import axios from "axios";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!task) {
      setError("Task is required.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const response = await axios.post("http://localhost:9091/api/todo", { task });

      if (response.status === 201) {
        setTask("");
        alert("Todo added successfully!");
      }
    } catch (err) {
      setError("Error adding todo. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="add-todo">
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            disabled={isSubmitting}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Add Todo"}
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
