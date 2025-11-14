import React, { useState } from 'react';
import InputToDo from './Components/InputToDo';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e) => {
    const value = e.target.value;
    console.log(value);
    setInputValue(value);
  };

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodoList([...todoList, inputValue]);
      setInputValue(""); 
    }
  };

  return (
    <div className='todo-list'>
      <h1>Todo List</h1>

      <InputToDo 
        value={inputValue}
        onChange={inputHandler}
        onAdd={addTodo}
      />

      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
