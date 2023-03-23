import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const TaskList = ({ date }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(date) || '[]');
    setTasks(storedTasks);
  }, [date]);

  const addTask = (taskName) => {
    const newTasks = [...tasks, { name: taskName, completed: false }];
    setTasks(newTasks);
    localStorage.setItem(date, JSON.stringify(newTasks));
    toast.success('Task added successfully!');
  };
  
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    localStorage.setItem(date, JSON.stringify(newTasks));
    toast.error('Task deleted successfully!');
  };
  
  const toggleCompletion = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
    localStorage.setItem(date, JSON.stringify(newTasks));
    toast.info(
      tasks[index].completed
        ? 'Task marked as incomplete!'
        : 'Task marked as complete!'
    );
  };

  return (
    <div>
      <TaskInput onSubmit={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onDelete={() => deleteTask(index)}
            onToggleCompletion={() => toggleCompletion(index)}
          />
        ))}
      </ul>
    </div>
  );
};

const TaskInput = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput('');
  };

  return (
    <form className='flex gap-5' onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New task"
        className='bg-primary-100 w-80 placeholder:text-white p-2 rounded-md'
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

const TaskItem = ({ task, onDelete, onToggleCompletion }) => {
    return (
      <li className='mt-5 flex items-center justify-between w-[300px]'>
        <div>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={onToggleCompletion}
            />
            <span
            style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                marginLeft: '0.5rem',
            }}
            className="text-xl"
            >
            {task.name}
            </span>
        </div>
        <button
          onClick={onDelete}
          className="bg-red-500 p-1 rounded-md text-white"
        >
          Delete
        </button>
      </li>
    );
  };
  
export default TaskList;
  