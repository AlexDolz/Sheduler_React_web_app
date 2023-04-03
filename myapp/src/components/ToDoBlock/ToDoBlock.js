import React from 'react';
import ToDoList from '../ToDoList/ToDoList';
import s from './ToDoBlock.module.css';

export const ToDoBlock = ({ days, todos, removeDay, removeTodo }) => {
  return (
    <ul className={s.todo__block}>
      {days.map((elem, index) => (
        <ToDoList
          day={elem}
          key={index}
          todos={todos}
          removeDay={removeDay}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};
