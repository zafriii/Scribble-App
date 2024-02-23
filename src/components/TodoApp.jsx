import React, { useState, useEffect } from 'react';
import './todos.css';



function TodoApp() {

  
    const getLocalTodos = () => {
        const localTodos = localStorage.getItem('todos');
        return localTodos ? JSON.parse(localTodos) : [];
    };
    

    const [todos, setTodos] = useState(getLocalTodos());
    const [input, setInput] = useState('');
    const [editId, setEditId] = useState(null);
  

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const handleAddTodo = () => {
        if (input.trim() !== '') {
            if (editId !== null) {
               
                const updatedTodos = todos.map(todo =>
                    todo.id === editId
                        ? { ...todo, text: input }
                        : todo
                );
                setTodos(updatedTodos);
                setEditId(null);
            } else {
                
                const newTodo = {
                    id: Date.now(),
                    text: input,
                    completed: false, 
                };
                setTodos([...todos, newTodo]);
            }
            setInput('');
        }
    };

    const handleEditTodo = id => {
        const todoToEdit = todos.find(todo => todo.id === id);
        if (todoToEdit) {
            setInput(todoToEdit.text);
            setEditId(id);
        }
    };

    const handleToggleComplete = id => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const handleDeleteTodo = id => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div className='todoapp'>
            <div className="todos">
                <h1>Todo App</h1>
                <div className="add-todos">
                    <input className='add-input'
                    placeholder='Add todos...'
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <button className='button' onClick={handleAddTodo}>
                        {editId !== null ? 'Edit ' : 'Add '}
                    </button>
                    {todos.map(todo => (
                        <div key={todo.id} className="todo-item">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => handleToggleComplete(todo.id)}
                            />
                            <span
                                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                            >
                                {todo.text}
                            </span>
                            <button className='button' onClick={() => handleEditTodo(todo.id)}>Edit</button>
                            <button className='button' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TodoApp;

