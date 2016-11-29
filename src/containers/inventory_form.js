import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DatePicker from 'react-datepicker';
import { addItem } from '../actions/index';
import moment from 'moment';
import _ from 'lodash';
import uuid from 'uuid';

class InventoryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment()
    };
  }

  handleDateChange(date) {
    if (!date) {
      this.setState({startDate: moment()});
    } else {
      this.setState({startDate: moment(date)});
    }
  }

  addItem(event) {
    event.preventDefault();
    const newItem = {
      itemName: this.itemName.value,
      price: this.price.value,
      description: this.description.value,
      taxable: this.taxable.value,
      dateAvailable: this.state.startDate,
      id: uuid()
    };
    if (this.validate(newItem)) {
      this.props.addItem(newItem);
    }
  }

  renderField(field) {
    return (
      <div key={field.label}>
        <label>{field.label}</label>
        <input
          className="form-control"
          ref={(input) => this[field.property] = input}
          type={field.inputType} />
          {this.state.errors[field]}
      </div>
    );
  }

  validate(item) {
    if (!item.itemName) {
      this.setState({errors['itemName']: 'Fill in a name'});
    }
    // if (!item.price || isNaN(item.price)) {
      // this.setState(errors.itemName, 'Fill in a name');
      // errors.price = "Fill in a price with only numbers";
    // }
    // if (!item.description) {
      // errors.description = "Fill in a description";
    // }
    // if (!item.dateAvailable) {
      // errors.dateAvailable = "Fill in a date";
    // }
  }

  render() {
    const fields = {
      itemName: { label: 'Item Name', property: 'itemName', inputType: 'text'},
      price: { label: 'Item Price (in cents)', property: 'price', inputType: 'text'},
      description: { label: 'Item Description', property: 'description', inputType: 'text'},
      taxable: { label: 'Taxable?', property: 'taxable', inputType: 'checkbox'}
    };

    return (
      <form onSubmit={this.addItem.bind(this)}>
        <div className="input-group input-group">
          {_.map(fields, this.renderField.bind(this))}
          <label>Available Date</label><br />
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleDateChange.bind(this)}
            className="form-control"/>
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
