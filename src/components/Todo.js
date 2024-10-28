import React, { useState } from 'react'

export default function Todo({todo,deleteTodo,updateTodoItem}) {

  let [isEdit, setIsEdit] = useState(false)
  let [title,setTitle] = useState(todo.title)
  let handleTodo = () =>{
    setIsEdit(true)
   
  }
  let updateTodo = (e) =>{
    e.preventDefault();

    let updateTodo ={
      id: todo.id,
      title:title,
      completed:todo.completed
    }
    updateTodoItem(updateTodo)
    setIsEdit(false);
  }
  return (
    <li className="todo-item-container">
            <div className="todo-item">
              <input type="checkbox" />
              {!isEdit && <span className={`todo-item-label ${todo.completed ? 'line-through' : ''}`} onDoubleClick={handleTodo}>
                {todo.title}
              </span>}
              { isEdit && 
                <form onSubmit={updateTodo}>
                  <input type="text" className="todo-item-input" value={title} onChange={(e)=>setTitle(e.target.value)} />
                </form>
                }
            </div>
            <button className="x-button" onClick={()=>deleteTodo(todo.id)}>
              <svg
                className="x-button-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
  )
}
