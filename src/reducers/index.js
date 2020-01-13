import { combineReducers } from 'redux';
import usersReducer from './reducer_users'
import ActiveUserReducer from './reducer_activeUser'
const rootReducer = combineReducers({
  users: usersReducer,
  activeUser: ActiveUserReducer
});

export default rootReducer;
