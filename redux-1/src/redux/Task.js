

import React  from 'react';

const Task = ({ task }) => {
  return (
    <li>
      <span>{task.description}</span>
      <input type="checkbox" checked={task.completed} />
    </li>
  );
};

export default Task;
