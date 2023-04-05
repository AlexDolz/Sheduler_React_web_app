import { useState } from 'react';
import s from './ToDoItem.module.css';

const ToDoItem = ({
  importance,
  description,
  removeTodo,
  id,
  changeImportance,
}) => {
  const itemStyles = {
    background: importance === '1' ? '#1ABC9C' : '#E74C3C',
  };

  let [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = event => {
    event.stopPropagation();
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
      title='Change priority on double click'
      style={itemStyles}
      className={s.todo__item}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onDoubleClick={() => changeImportance(id)}
    >
      <div>
        <p>{description}</p>
        <button
          className={s.close__btn}
          style={opacityStyle}
          onClick={() => removeTodo(id)}
        >
          &#x2716;
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
