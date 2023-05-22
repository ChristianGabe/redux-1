

import React from 'react';
import AddTask from './redux/AddTask';
import TaskList from './redux/TaskList';

const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
