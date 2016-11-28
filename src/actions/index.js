export const ADD_ITEM = 'ADD_ITEM';
export const FETCH_ITEMS = 'FETCH_ITEMS';

const defaultItems = [
  {itemName: 'Item1', availableDate: 'Friday Dec 21st, 2016', price: 101, description: 'here is a description', taxable: true},
  {itemName: 'Item2', availableDate: 'Friday Dec 21st, 2016', price: 101, description: 'here is a description', taxable: true},
  {itemName: 'Item3', availableDate: 'Friday Dec 21st, 2016', price: 101, description: 'here is a description', taxable: false},
  {itemName: 'Item4', availableDate: 'Friday Dec 21st, 2016', price: 1, description: 'here is a description', taxable: true}
];

export function fetchItems() {
  return {
    type: FETCH_ITEMS,
    payload: defaultItems
  };
}


export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  };
}
