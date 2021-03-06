import { FETCH_ITEMS, ADD_ITEM } from '../actions/index';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_ITEMS:
      return [...state, ...action.payload];
    case ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}
