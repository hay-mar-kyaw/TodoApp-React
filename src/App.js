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
  let [count,setCount] = useState(0);

  useEffect(()=>{
    fetch("http://localhost:3000/todos")
    .then(res=> res.json())
    .then((todos)=>{
       
      setTodos(todos)
    })
  },[])

  // add todo 
let addTodo = (todo) =>{
  //add todo into server
  fetch("http://localhost:3000/todos",{
    method : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body : JSON.stringify(todo)

  })
  
  //display on client side
  setTodos(prevState => [...prevState,todo])
}

// delete Todo 
let deleteTodo = (todoId) =>{
    
  // delete on server side 
  fetch(`http://localhost:3000/todos/${todoId}`,{
    method : "DELETE",
    })
  // delete on client side 
  setTodos(prevState => {
    return prevState.filter(todo =>{
    return todo.id !== todoId
  })})
    
}

//update todo
let updateTodoItem = (todo) =>{
//add todo into server
fetch(`http://localhost:3000/todos/${todo.id}`,{
  method : "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body : JSON.stringify(todo)

})

//update on client side 
  setTodos(prevState =>{
    return prevState.map(t =>{
      if(t.id === todo.id){
        return todo;
      }
      return t;
    })
  })
}

//remaining items
let remainingItem = todos.filter(todo => !todo.completed).length;

//check all
let checkAll = () =>{

  // server side 
  todos.forEach(updateTodo=>{
    updateTodo.completed = true;

    // calling update todo function 
    updateTodoItem(updateTodo)
  })

  // client side 
   setTodos((prevState) => {
     return prevState.map(todo => {
      return {...todo, completed : true}
    })
    }) 
}
//Clear all
let clearAll = () =>{

  // server side 
  todos.forEach(t=>{
    if(t.completed){
      deleteTodo(t.id);
    }

    
  })

  // client side 
    
  setTodos(prevState => {
    return prevState.filter(todo => !todo.completed)
  })
}


  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} updateTodoItem={updateTodoItem}/>        
        <CheckAllAndRemaining  remainingItem={remainingItem} checkAll={checkAll}/>
        
        <div className="other-buttons-container">
          <TodoFilter/>
          <ClearCompletedBtn clearAll={clearAll}/>
        </div>
      </div>
    </div>
  );
}

export default App;
