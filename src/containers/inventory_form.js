import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DatePicker from 'react-datepicker';
import { addItem } from '../actions/index';
import moment from 'moment';
import _ from 'lodash';
import uuid from 'uuid';

const FIELDS = {
  itemName: { label: 'Item Name', type: 'input'},
  price: { label: 'Item Price (in cents)', type: 'input'},
  description: { label: 'Item Description', type: 'input'}
};

class InventoryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null
    };
  }

  handleDateChange(date) {
    if (!date) {
      this.setState({startDate: moment()});
    } else {
      this.setState({startDate: moment(date)});
    }
  }

  addItem(props) {
    var newItem = props;
    props.taxable = this.taxable.value;
    props.id = uuid();
    this.props.addItem(props);
    this.props.resetForm();
    this.setState({ startDate: null });
  }

  renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field];

    return (
      <div key={fieldConfig.label} className="form-group">
        <label>{fieldConfig.label}</label>
        <fieldConfig.type type={fieldConfig.inputType} {...fieldHelper}
          className="form-control"/>
        <span className={`${fieldHelper.touched && fieldHelper.invalid ? 'validation-error' : ''}`} >
          {fieldHelper.touched ? fieldHelper.error : ''}
        </span>
      </div>
    );
  }

  render() {
    const {  fields: {taxable, dateAvailable}, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.addItem.bind(this))}>
        {_.map(FIELDS, this.renderField.bind(this))}
        <label className="taxable-label">Taxable?</label>
        <input className="taxable-checkbox" type="checkbox"  {...taxable}
          ref={(input) => this.taxable = input} />
        <div>
          <label>First Date Available</label>
        </div>
        <DatePicker {...dateAvailable}
          selected={this.state.startDate}
          onChange={this.handleDateChange.bind(this)}/>
          <br />
          <span className={`${dateAvailable.touched && dateAvailable.invalid ? 'validation-error' : ''}`} >
            {dateAvailable.touched ? dateAvailable.error : ''}
          </span>
          <br/>
        <button type="submit" className="btn btn-primary btn-submit-item">Submit</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addItem}, dispatch);
}

function validate(values) {
  const errors = {};
  _.each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = `Enter a ${field}`;
    }
  });
  if (values.price && isNaN(values.price)) {
    errors.price = 'Please enter only numbers';
  }
  if (!values.dateAvailable) {
    errors.dateAvailable = 'Please enter a date';
  }

  return errors;
}

export default reduxForm({
  form: 'InventoryForm',
  fields: _.keys(FIELDS).concat('taxable', 'dateAvailable'),
  validate
}, null, { addItem })(InventoryForm);
