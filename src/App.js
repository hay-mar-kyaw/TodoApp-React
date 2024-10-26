import './reset.css';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import CheckAllAndRemaining from './components/CheckAllAndRemaining';
import TodoFilter from './components/TodoFilter';
import ClearCompletedBtn from './components/ClearCompletedBtn';

function App() {
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm/>
        <TodoList />        
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