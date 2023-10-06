import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import {
  FormWrap,
  Form,
  FormLabel,
  FormInput,
  FormButton,
} from 'Components/PhonebookForm/PhonebookForm.styled';

class PhonebookForm extends Component {
  state = {
    // contacts: [],
    name: '',
    number: '',
  };
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    // this.id = nanoid();
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <FormWrap>
        <h1>PHONEBOOK</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput
            onChange={this.handleInputChange}
            value={this.state.name}
            type="text"
            name="name"
          ></FormInput>
          <FormLabel htmlFor="number">Number</FormLabel>
          <FormInput
            onChange={this.handleInputChange}
            value={this.state.number}
            type="tel"
            name="number"
          ></FormInput>
          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </FormWrap>
    );
  }
}
export default PhonebookForm;
