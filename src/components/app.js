import React from 'react';
import { Component } from 'react';
import Inventory from '../containers/inventory';
import InventoryForm from '../containers/inventory_form';

/* could use react-router to create an `index page` in addition to an `add new item` page,
but for simplicity, they appear on the same index page */
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="text-center">Store Inventory</h1>
        <div className="col-md-6">
          <Inventory />
        </div>
        <div className="col-md-6">
          <InventoryForm />
        </div>
      </div>
    );
  }
}
