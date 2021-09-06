import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import data from './data/contacts.json'
import Container from './components/Container';
import Section from './components/Section';
import Form from './components/Form';
import ContactList from './components/ContactList';


class App extends Component {

  // static defaultProps = {
  //   initialValue: 0,
  // }

  state = {
    contacts: [],
    filter: ''
  }

  addContact = ({name, number}) => {
    const contact = {
      id: uuidv4(),
      name,
      number
    };

    this.setState(prevState => ({
      contacts:[contact,...prevState.contacts],
    }))
  }

  deleteContact = contactId => {
    console.log(this.state.contacts);
    this.setState(prevState => ({
      contacts:prevState.contacts.filter(contact => contact.id !==contactId),
    }))
  }
    
  render() {
    const { contacts} = this.state;
    return (
      <Container>
        <Form onAddContact={this.addContact}  />
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact}/>
      </Container>
    );
  }
}

export default App;

