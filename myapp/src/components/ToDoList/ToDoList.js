import { useState } from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import s from './ToDoList.module.css';

const ToDoList = ({ day, todos, removeDay, removeTodo }) => {
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  let [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const opacityStyle = {
    opacity: isHovered ? 1 : 0,
  };

  return (
    <li
      className={s.todo__list__day}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <p className={s.todo__day}>{dayNames[day]}</p>
      <button
        onClick={() => removeDay(day)}
        className={s.close__btn}
        style={opacityStyle}
      >
        &#x2716;
      </button>
      <ul className={s.todo__list__items}>
        {todos.map((elem, index) => {
          if (elem.day === day) {
            return (
              <ToDoItem
                key={index}
                id={elem.id}
                importance={elem.importance}
                description={elem.description}
                removeTodo={removeTodo}
              />
            );
          }
          return null;
        })}
      </ul>
    </li>
  );
};

export default ToDoList;
