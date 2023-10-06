import { nanoid } from 'nanoid';
import { Container } from 'Components/App/App.styled';
import React, { Component } from 'react';
import PhonebookForm from '../PhonebookForm/PhonebookForm';
import ContactList from '../ContactList/ContactList.jsx';
import Filter from '../Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contacts => {
    const { name, number } = contacts;
    for (const contact of this.state.contacts) {
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        alert(`${name} is already in contacts`);
        return;
      }
    }
    const contact = { id: nanoid(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  filterContacts = () => {
    const { contacts, filter } = this.state;
    const filterNormalized = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized)
    );
  };
  deleteContact = contactId => {
    console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <PhonebookForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter defaultValue={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        ></ContactList>
      </Container>
    );
  }
}
