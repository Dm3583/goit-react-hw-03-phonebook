import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  state = {
    ...INITIAL_STATE,
  };

  handleInput = e => {
    const stateField = e.target.name;
    this.setState({ [stateField]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (!name || !number) {
      alert(`Complete the form please`);
      return;
    }

    const contact = {
      id: uuid(),
      name,
      number,
    };
    this.props.addContact(contact);
    this.clearInput();
  };

  clearInput = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    const { handleInput, handleSubmit } = this;

    return (
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input type="text" value={name} onChange={handleInput} name="name" />
        </label>{' '}
        <label>
          <p>Number</p>
          <input
            type="tel"
            value={number}
            onChange={handleInput}
            name="number"
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
