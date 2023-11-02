"use client";

import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      addTodo(todo);
      setTodo('')
    }
  }

  return (
      <form onSubmit={onSubmit}>
        <input
            className="px-2 py-1"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add a todo"
        />
        <button className="bg-blue-400 px-3 py-1" type="submit">Add</button>
      </form>
  )
}
