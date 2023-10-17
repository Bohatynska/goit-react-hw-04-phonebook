import { Container } from 'Components/App/App.styled';
import React, { useState, useEffect } from 'react';
import {
  basicContacts,
  getFromLocalStorage,
  setToLocalStorage,
} from 'Components/services/localStorage';
import PhonebookForm from '../PhonebookForm/PhonebookForm';
import ContactList from '../ContactList/ContactList.jsx';
import Filter from '../Filter/Filter';

function App() {
  const [contacts, setContacts] = useState(
    getFromLocalStorage('contacts') ?? basicContacts
  );
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === newContact.name.toLowerCase()) {
        return alert(`${newContact.name}  is already in contacts.`);
      }
      console.log(contact.name);
    }

    setContacts(prevState => [newContact, ...prevState]);
  };

  const changeFilter = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const filterContacts = () => {
    const filterNormalized = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = filterContacts(contacts, filter);
  useEffect(() => {
    setToLocalStorage('contacts', contacts);
  }, [contacts]);
  return (
    <Container>
      <h1>Phonebook</h1>
      <PhonebookForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter defaultValue={filter} onChange={changeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDelete={deleteContact}
      ></ContactList>
    </Container>
  );
}
export default App;
