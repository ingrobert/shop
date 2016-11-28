import { combineReducers } from 'redux';
import ItemsReducer from './reducer_items';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  allItems: ItemsReducer,
  form: formReducer
});

export default rootReducer;
