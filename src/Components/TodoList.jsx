import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext'
//destructured the array of todos into a single todo object.
function TodoList({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  //to know the message to edit it. By default is the previous todo before editing
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    //after editing make the todo to edit false.
    setIsTodoEditable(false)
  }
  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
      <div
          className={`flex rounded-lg px-3 py-1.5 gap-x-3 text-black ${
              todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={toggleCompleted}
          />
          <input
              type="text"
              className={`border w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "px-2 outline-none" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              //if you want to edit then it will not be readOnly.
              readOnly={!isTodoEditable}
          />
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.completed) return;
                    //It todo is editable then call editTodo() else change isTodoeditable from true to false.
                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>
      </div>
  );
}

export default TodoList;