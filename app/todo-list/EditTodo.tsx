'use client';

import { FormEvent, useEffect, useState } from "react";

interface ITodo {
  id: string,
  value: string,
}

export default function EditTodo({emitTodo, inputData} : {emitTodo: (e: ITodo) => void, inputData: ITodo}) {
  const [editTodo, setEditTodo] = useState<ITodo>({id: '', value: ''})

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    emitTodo(editTodo);
    setEditTodo({id: '', value: ''});
  }

  useEffect(() => {
    setEditTodo(inputData);
  }, [inputData]);

  return(
      <form onSubmit={onSubmit}>
        <input
            className="px-2 py-1"
            disabled={!editTodo.id}
            type="text"
            value={editTodo.value}
            onChange={(e) => setEditTodo({id: editTodo.id, value: e.target.value})}
            placeholder="Please click to edit a todo"
        />
        <button disabled={!editTodo.id} className="bg-blue-400 px-3 py-1" type="submit">Edit</button>
      </form>
  )
}
