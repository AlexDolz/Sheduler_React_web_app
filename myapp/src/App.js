import './App.css';
import FormBlock from './components/FormBlock/FormBlock';
import { useState } from 'react';
import { ToDoBlock } from './components/ToDoBlock/ToDoBlock';

const App = () => {
  let [days, setDays] = useState([]);
  let [todos, setTodos] = useState([]);

  const formSubmit = event => {
    event.preventDefault();
    const { day, importance, description } = event.target;
    const newTodo = {
      id:
        Math.max(...todos.map(elem => elem.id)) + 1 === -Infinity
          ? 1
          : Math.max(...todos.map(elem => elem.id)) + 1,
      day: day.value,
      importance: importance.value,
      description: description.value,
    };
    todos = [...todos, newTodo].sort((a, b) => a.importance - b.importance);
    setTodos(todos);
    if (!days.includes(day.value)) {
      days = [...days, day.value];
    }
    days.sort((a, b) => a - b);
    setDays(days);

    event.target.day.value = '';
    event.target.importance.value = '';
    event.target.description.value = '';
  };
  days.sort((a, b) => +b.day - +a.day);

  const removeDay = day => {
    setDays(days.filter(elem => elem !== day));
    setTodos(todos.filter(elem => elem.day !== day));
  };

  const removeTodo = id => {
    setTodos(todos.filter(elem => elem.id !== id));
  };

  return (
    <div>
      <div className='container'>
        <FormBlock formSubmit={formSubmit} />
        <ToDoBlock
          days={days}
          todos={todos}
          removeDay={removeDay}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
};

export default App;
