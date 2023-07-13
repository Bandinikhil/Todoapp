import React, { useState, useEffect } from 'react';
import './TodoApp.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Retrieve todos from localStorage on component mount
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    // Store todos in localStorage whenever it changes
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const markAsComplete = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const resetTodos = () => {
    setTodos([]);
  };

  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="todo-app">
      <h1>TODO App</h1>
      <div className="todo-input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Add a new TODO"
        />
      </div>
      <div className="todo-list">
        <h2>Active TODOs</h2>
        {activeTodos.map(todo => (
          <div
            key={todo.id}
            className="todo-item"
            onClick={() => markAsComplete(todo.id)}
          >
            {todo.text}
          </div>
        ))}
      </div>
      <div className="todo-list">
        <h2>Completed TODOs</h2>
        {completedTodos.map(todo => (
          <div key={todo.id} className="todo-item completed">
            {todo.text}
          </div>
        ))}
      </div>
      <button className="reset-button" onClick={resetTodos}>Reset</button>
    </div>
  );
};

export default App;


