import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItems } from '../actions/index';
import { formatPrice } from '../helpers';
import moment from 'moment';

class Inventory extends Component {
  componentWillMount() {
    this.props.fetchItems();
  }

  constructor(props) {
    super(props);

    this.renderTaxable = this.renderTaxable.bind(this);
  }

  renderTaxable(taxable) {
    return taxable ? 'Yes' : 'No';
  }

  renderDateAvailable(date) {
    if (!moment.isMoment(date)) {
      return date;
    } else {
      return date.format('MM-DD-YYYY');
    }
  }

  renderInventory() {
    if (this.props.allItems.length > 0) {
      return this.props.allItems.map((item) => {
        return (
          <div key={item.id} className="panel panel-default">
            <div className="panel-body">
              <li>
                <h3>{item.itemName}</h3>
              </li>
              <li><b>Price:</b> {formatPrice(item.price)}</li>
              <li><b>Description:</b> {item.description}</li>
              <li><b>Date Available:</b> {this.renderDateAvailable(item.dateAvailable)}</li>
              <li><b>Taxable?:</b> {this.renderTaxable(item.taxable)}</li>
            </div>
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
      <div>
        <ul className="list-unstyled">
          {this.renderInventory()}
        </ul>
      </div>
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
