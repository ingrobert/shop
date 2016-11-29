export const ADD_ITEM = 'ADD_ITEM';
export const FETCH_ITEMS = 'FETCH_ITEMS';

// dummy data
const defaultItems = [
  {itemName: 'Steak', dateAvailable: '12-25-2016', price: 90.89, description: 'Bacon ipsum dolor amet hamburger tri-tip cow short ribs, filet mignon andouille chicken jerky.', taxable: true, id: '6414d6bd-8154-4bd9-a5af-67916c1e2b1b'},
  {itemName: 'Chicken Thigh', dateAvailable: '12-07-2016', price: 1600, description: 'Shankle t-bone biltong, cupim andouille pork loin tri-tip bacon tongue sirloin beef strip steak fatback.', taxable: true, id: '0bb4cc0c-ee25-42b9-8a45-e88f8a124811'},
  {itemName: 'Pork Chop', dateAvailable: '12-01-2016', price: 150, description: 'Biltong landjaeger porchetta cupim pig. Shankle beef pork, salami burgdoggen turkey tail', taxable: false, id: '3787e2ba-8d5b-4bba-b482-623ff4f05fe1'},
  {itemName: 'Meatballs', dateAvailable: '11-30-2016', price: 1, description: 'Pig picanha tongue, kielbasa kevin beef venison filet mignon bacon tri-tip flank ball tip sausage ham hock', taxable: true, id: '9d74bbbd-4a08-4c50-a770-038acb934032'}
];

/* could add a remote server in the future. use a library such as `axios` to
create requests, and `redux-promise` to handle data in promises state */
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
