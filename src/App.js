import React, {Component} from 'react';
import Container from './components/Container';
import Section from './components/Section';
import Form from './components/Form';

class App extends Component {

  static defaultProps = {
    initialValue: 0,
  }

  state = {
    contacts: [],
    name: '',
    number: ''
  }
  formSubmitHandler = data => {
    console.log(data);
    }
 


  render() {
    // const { name, number } = this.state;
    return (
      <Container>
        <Form onSubmit={ this.formSubmitHandler}/>
      </Container>
    );
  }
}

export default App;

