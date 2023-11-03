"use client";

import { FormEvent, useState } from "react";

export default function AddTodo({ addTodo }: {addTodo: (e: string) => void}) {
  const [todo, setTodo] = useState('');

  const onSubmit = (e: FormEvent) => {
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
