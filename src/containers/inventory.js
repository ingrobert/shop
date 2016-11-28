import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItems } from '../actions/index';

class Inventory extends Component {
  componentWillMount() {
    this.props.fetchItems();
  }

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
    if (this.props.allItems.length > 0) {
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
    } else {
      return (
        <div>
          No Items...consider adding a few!
        </div>
      );
    }
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchItems}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
