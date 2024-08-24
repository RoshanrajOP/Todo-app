import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import { BsSearch, BsPlus } from 'react-icons/bs';
import { addTodo, updateSearchTerm } from '../redux/actions';

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== '') {
      handleAddTodo(newTodoText.trim());
      setNewTodoText('');
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodoClick();
    }
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center uppercase text-blue-600 mb-6">
        {/* Applying animation to each word */}
        <span className="animate-text-appear delay-100 inline-block">Personal</span>{' '}
        <span className="animate-text-appear delay-300 inline-block">TODO</span>{' '}
        <span className="animate-text-appear delay-500 inline-block">APP</span>
      </h2>
      <div className="flex items-center mb-6">
        <input
          id="addTodoInput"
          className="flex-grow p-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
          type="text"
          placeholder="Add a new task..."
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="ml-4 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none transition duration-300"
          onClick={handleAddTodoClick}
        >
          <BsPlus size={24} />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButtons />
        <div className="flex items-center w-full sm:w-auto">
          <input
            className="flex-grow p-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="ml-4 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none transition duration-300">
            <BsSearch size={24} />
          </button>
        </div>
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
