import { combineReducers } from 'redux';
import sportsReducer from './sportsReducer';

export default combineReducers({
  sports: sportsReducer,
});
