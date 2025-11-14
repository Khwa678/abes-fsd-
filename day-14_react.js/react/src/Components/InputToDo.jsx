import React from 'react';

function InputToDo({ value, onChange, onAdd }) {
  return (
    <div className="input-area">
      <input 
        type="text" 
        value={value} 
        onChange={onChange} 
        placeholder="Enter todo"
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
}

export default InputToDo;
