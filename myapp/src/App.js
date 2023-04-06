import './App.css';
import FormBlock from './components/FormBlock/FormBlock';
import { useEffect, useState } from 'react';
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

    event.target.reset();
  };
  days.sort((a, b) => +b.day - +a.day);

  const removeDay = day => {
    setDays(days.filter(elem => elem !== day));
    setTodos(todos.filter(elem => elem.day !== day));
  };

  const removeTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    const deletedTodo = todos.find(todo => todo.id === id);
    setTodos(updatedTodos);

    const remainingTodosForDay = updatedTodos.filter(
      todo => todo.day === deletedTodo.day
    );
    if (remainingTodosForDay.length === 0) {
      const updatedDays = days.filter(day => day !== deletedTodo.day);
      setDays(updatedDays);
    }
  };

  const changeImportance = id => {
    let updatedTodo = todos.map(elem => {
      if (elem.id === id) {
        elem.importance = elem.importance === '0' ? '1' : '0';
      }
      return elem;
    });
    setTodos(updatedTodo);
  };

  useEffect(() => {
    let updatedTodo = JSON.parse(localStorage.getItem('todos')) || todos;
    let updatedDays = JSON.parse(localStorage.getItem('days')) || days;
    setDays(updatedDays);
    setTodos(updatedTodo);
  }, []);

  useEffect(() => {
    localStorage.setItem('days', JSON.stringify(days));
  }, [days]);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <div className='container'>
        <FormBlock formSubmit={formSubmit} />
        <ToDoBlock
          days={days}
          todos={todos}
          removeDay={removeDay}
          removeTodo={removeTodo}
          changeImportance={changeImportance}
        />
      </div>
    </div>
  );
};

export default App;
