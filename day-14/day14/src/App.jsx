import {useState} from "react";
import { use } from "react";
import InputToDo from "./Components/InputToDo";
function App() {
  const [todoList,setToDoList] = React.useState([]);
  const inputHandler = (inputValue) => {
    setToDoList([...todoList, inputValue]);
  }
  const deleteHandler = (index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setToDoList([...newList]);
  }
  const updateHandler = (index, data) => {
  }
  return (
    <div className="todolist">
      <h1>To-Do List Application</h1>
      {todoList.map((data,index) => 
        <li key={index}>
          {data}
          {/* <button onClick={() => {}}></button> */}
          <button onClick={()=>deleteHandler(index)}>Del</button>
          <button onClick={()=>updateHandler(index,data)}>Del</button>
        </li>
      )}
      <InputToDo inputHandler = {inputHandler} />
    </div>
  )
}
export default App;