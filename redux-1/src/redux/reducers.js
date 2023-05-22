

import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from '../redux/actions/user-actions';


const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          description: action.payload.description,
          isDone: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isDone: !todo.isDone }
          : todo
      );
    default:
      return state;
  }
};


const filter = (state = 'all', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  todos,
  filter,
});

export default rootReducer;
