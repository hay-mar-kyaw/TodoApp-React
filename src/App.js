import './reset.css';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import CheckAllAndRemaining from './components/CheckAllAndRemaining';
import TodoFilter from './components/TodoFilter';
import ClearCompletedBtn from './components/ClearCompletedBtn';
import { useEffect, useState } from 'react';

function App() {

  let [todos,setTodos] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3003/todos")
    .then(res=> res.json())
    .then((todos)=>{
       
      setTodos(todos)
    })
  },[])

  // add todo 
let addTodo = (todo) =>{
  //add todo into server
  fetch("http://localhost:3003/todos",{
    method : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body : JSON.stringify(todo)

  })
  
  //display on client side
  setTodos(prevState => [...prevState,todo])
}

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos}/>        
        <CheckAllAndRemaining />
        
        <div className="other-buttons-container">
          <TodoFilter/>
          <ClearCompletedBtn/>
        </div>
      </div>
    </div>
  );
}

export default App;
