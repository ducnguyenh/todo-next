'use client';

import { useState } from "react";
import TodoForm from "@/app/todo-list/TodoForm";

interface ITodo {
  id: string,
  value: string,
}

export default function TodoList() {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [editTodo, setEditTodo] = useState<ITodo>({id: '', value: ''})

  const addTodo = (value: string) => {
    const newTodo = {
      id: Math.random().toString(),
      value: value
    };

    setTodoList([...todoList, newTodo]);
  }

  const onDelete = (id: string) => {
    const newTodoList = todoList.filter(el => el.id !== id);
    setTodoList(newTodoList);
  };

  const onEditTodo = (e) => {
    e.preventDefault();
    todoList.forEach(el => {
      if (el.id === editTodo.id) {
        el.value = editTodo.value;
        setEditTodo({id: '', value: ''})
      }
    });
    setTodoList([...todoList]);
    console.log('value', todoList, editTodo);
  }

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="w-full">
          <h1 className="text-2xl mb-3">To do list</h1>
          <div className="flex justify-between">
            <TodoForm addTodo={addTodo} />
            <form onSubmit={onEditTodo}>
              <input
                  className="px-2 py-1"
                  type="text"
                  value={editTodo.value}
                  onChange={(e) => setEditTodo({id: editTodo.id, value: e.target.value})}
                  placeholder="Edit a todo"
              />
              <button className="bg-blue-400 px-3 py-1" type="submit">Edit</button>
            </form>
          </div>
          <div className="mt-5">
            {todoList.map((el, i) => {
              return (
                  <div className="bg-white pl-3 flex items-center justify-between mb-1" key={el.id}>
                    <span>{el.value}</span>
                    <span>
                      <button className='bg-blue-400 p-2' type="button" onClick={() => setEditTodo({id: el.id, value: el.value})}>Edit</button>
                      <button className='ml-2 bg-red-400 p-2' type="button" onClick={() => onDelete(el.id)}>Delete</button>
                    </span>
                  </div>
              )
            })}
          </div>
        </div>
      </main>
  )
}
