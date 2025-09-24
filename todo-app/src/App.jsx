import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [filter, setFilter] = useState('all');
  const todoExample = {
  id: Date.now(), // или используйте crypto.randomUUID()
  text: "Изучить React",
  completed: false,
  createdAt: new Date().toISOString()
};

const addTodo = (text) => {
  const newTodo = {
    id: Date.now(),
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString()
  };
  setTodos(prev => [...prev, newTodo]);
};

const [todos, setTodos] = useState(() => {
  const savedTodos = localStorage.getItem('todos');
  return savedTodos ? JSON.parse(savedTodos) : [];
});

const toggleTodo = (id) => {
  setTodos(prev => 
    prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

const deleteTodo = (id) => {
  setTodos(prev => prev.filter(todo => todo.id !== id));
};

const updateTodo = (id, newText) => {
  setTodos(prev =>
    prev.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    )
  );
};

  return (
<div className="app">
      <div className="container">
        <header className="header">
          <h1>Todo App</h1>
        </header>
        {/* остальные компоненты */}
      </div>
    </div>
  );
}

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);

export default App
