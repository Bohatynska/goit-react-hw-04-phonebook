import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  FormWrap,
  Form,
  FormLabel,
  FormInput,
  FormButton,
} from 'Components/PhonebookForm/PhonebookForm.styled';

function PhonebookForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name,
      number,
    };
    onSubmit(contact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormWrap>
      <h1>PHONEBOOK</h1>
      <Form onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput
          onChange={handleInputChange}
          value={name}
          type="text"
          name="name"
        ></FormInput>
        <FormLabel htmlFor="number">Number</FormLabel>
        <FormInput
          onChange={handleInputChange}
          value={number}
          type="tel"
          name="number"
        ></FormInput>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    </FormWrap>
  );
}

export default PhonebookForm;
