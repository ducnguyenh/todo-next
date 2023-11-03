'use client';

import { useState } from "react";
import AddTodo from "@/app/todo-list/AddTodo";
import EditTodo from "@/app/todo-list/EditTodo";

interface ITodo {
  id: string,
  value: string,
}

export default function TodoList() {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [editTodo, setEditTodo] = useState<ITodo>({id: '', value: ''})

  const handleAddTodo = (value: string) => {
    const newTodo = {
      id: Math.random().toString(),
      value: value
    };

    setTodoList([...todoList, newTodo]);
  }

  const handleDeleteTodo = (id: string) => {
    const newTodoList = todoList.filter(el => el.id !== id);
    setTodoList(newTodoList);
  };

  const handleEditTodo = (data: ITodo) => {
    todoList.map(el => {
      if (el.id === data.id) {
        el.value = data.value;
      }
    });

    setTodoList([...todoList]);
  }

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="w-full">
          <h1 className="text-2xl mb-3">To do list</h1>
          <div className="flex justify-between">
            <AddTodo addTodo={handleAddTodo} />
            <EditTodo emitTodo={handleEditTodo} inputData={editTodo} />
          </div>
          <div className="mt-5">
            {todoList.map((el) => {
              return (
                  <div className="bg-white pl-3 flex items-center justify-between mb-1" key={el.id}>
                    <span>{el.value}</span>
                    <span>
                      <button className='bg-blue-400 p-2' type="button" onClick={() => setEditTodo({id: el.id, value: el.value})}>Edit</button>
                      <button className='ml-2 bg-red-400 p-2' type="button" onClick={() => handleDeleteTodo(el.id)}>Delete</button>
                    </span>
                  </div>
              )
            })}
          </div>
        </div>
      </main>
  )
}
