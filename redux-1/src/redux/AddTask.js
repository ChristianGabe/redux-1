

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions/user-actions';

const AddTask = ({ addTodo }) => {
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (description.trim() !== '') {
      addTodo({
        id: Math.random(),
        description,
        completed: false
      });
      setDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default connect(null, { addTodo })(AddTask);
