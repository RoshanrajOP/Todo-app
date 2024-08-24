import { useDispatch } from 'react-redux';
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from '../redux/actions';
import { FaToggleOn, FaToggleOff, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-gray-200 py-3 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-400 font-semibold">
          {index + 1}.
        </span>
        <span
          className={`mr-4 text-lg font-medium ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'
            }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="space-x-3 ml-8 flex">
        <button
          className="text-sm sm:px-3 px-2 py-1 rounded-full transition-colors duration-200 ease-in-out 
          bg-blue-100 text-blue-500 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        <button
          className="text-sm sm:px-3 px-2 py-1 rounded-full transition-colors duration-200 ease-in-out 
          bg-red-100 text-red-500 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
        {!todo.completed && (
          <button
            className="text-sm sm:px-3 px-2 py-1 rounded-full transition-colors duration-200 ease-in-out 
            bg-green-100 text-green-500 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
            className="text-sm sm:px-3 px-2 py-1 rounded-full transition-colors duration-200 ease-in-out 
            bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
