import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import data from './data/contacts.json'
import Container from './components/Container';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {

  state = {
    contacts: data,
    filter: ''
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number
    };

    if (name === contact.name) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts]
      }))
    }
  }
  
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts:prevState.contacts.filter(contact => contact.id !==contactId),
    }))
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter));
  }
  
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onAddContact={this.addContact} />

          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
        </div>
      </Container>
    );
  }
}

export default App;

