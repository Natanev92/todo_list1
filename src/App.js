import React, { useState} from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}
//imported TodoList as self closing tag
//created the emoty array in useSate
export default App;

//should I have made an input and task component insted?