import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
    
  render() {
    const { contacts} = this.state;
    return (
      <Container>
        <Form onSubmit={this.addContact} />
        <ContactList options={contacts}/>
      </Container>
    );
  }
}

export default App;

