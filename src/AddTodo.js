import React, { useState } from "react";
import axios from "axios";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!title || !description) {
        throw new Error("Fields are incomplete");
      }

      await axios.post("http://localhost:5000/api/createTodo", {
        title,
        description,
      });

      // Clear form after successful creation
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
