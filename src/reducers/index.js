import { combineReducers } from 'redux';
import AllItemsReducer from './reducer_items';

const rootReducer = combineReducers({
  allItems: AllItemsReducer
});

export default rootReducer;
