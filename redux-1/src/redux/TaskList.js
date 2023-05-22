

import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.todos
  };
};

export default connect(mapStateToProps)(TaskList);
