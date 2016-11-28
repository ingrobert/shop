import React from 'react';
import { Component } from 'react';
import Inventory from '../containers/inventory';
import InventoryForm from '../containers/inventory_form';

export default class App extends Component {
  render() {
    return (
      <div>
        <Inventory />
        <InventoryForm />
      </div>
    );
  }
}
