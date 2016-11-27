import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class Inventory extends Component {
  constructor(props) {
    super(props);

    this.renderTaxable = this.renderTaxable.bind(this);
  }

  renderTaxable(item) {
    if (item.taxable) {
      return 'true';
    } else {
      return 'false';
    }
  }

  renderInventory() {
    return this.props.allItems.map((item) => {
      return (
        <div key={item.itemName}>
          <li>{item.itemName}</li>
          <li>{item.price}</li>
          <li>{item.description}</li>
          <li>{this.renderTaxable(item)}</li>
      </div>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderInventory()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    allItems: state.allItems
  };
}
export default connect(mapStateToProps)(Inventory);
