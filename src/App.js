import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import data from './data/contacts.json'
import Container from './components/Container';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';


class App extends Component {

  // static defaultProps = {
  //   initialValue: 0,
  // }

  state = {
    contacts: data,
    filter: ''
  }

  addContact = ({name, number}) => {
    const contact = {
      id: uuidv4(),
      name,
      number
    };

    this.setState(({contacts}) => ({
      contacts:[contact,...contacts],
    }))
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts:prevState.contacts.filter(contact => contact.id !==contactId),
    }))
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }

  // searchContact = contacts=> {
  //   this.setState(prevState => ({
  //     contacts:prevState.contacts.find(contact => contact.id ===contactId),
  //   }))
  // }
    
  render() {
    const { contacts, filter } = this.state;
    const normilizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter));
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

