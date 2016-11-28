import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../actions/index';

class InventoryForm extends Component {
  addItem(event) {
    event.preventDefault();
    const newItem = {
      name: this.name.value,
      price: this.price.value,
      description: this.description.value,
      taxable: this.taxable.value,
      dateAvailable: this.dateAvailable.value
    };
    this.props.addItem(newItem);
  }

  render() {
    //refactor
    return (
      <form onSubmit={this.addItem.bind(this)}>
        <div className="form-group">
          <label>Item Name</label>
          <input ref={(input) => this.name = input} type="text"></input>
        </div>
        <div className="form-group">
          <label>Item Price</label>
          <input ref={(input) => this.price = input} type="text"></input>
        </div>
        <div className="form-group">
          <label>Item Description</label>
          <input ref={(input) => this.description = input} type="text"></input>
        </div>
        <div className="form-group">
          <label>Taxable?</label>
          <input ref={(input) => this.taxable = input} type="text"></input>
        </div>
        <div className="form-group">
          <label>Available Date</label>
          <input ref={(input) => this.dateAvailable = input} type="text"></input>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addItem}, dispatch);
}

export default connect(null, mapDispatchToProps)(InventoryForm);
