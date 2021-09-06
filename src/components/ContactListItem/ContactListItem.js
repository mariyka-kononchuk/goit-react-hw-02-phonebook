import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

const ContactListItem = ({ contacts, onDeleteContact }) => (
    <div>
        <p>{contacts.name}:<span>{contacts.number}</span></p>
        <button onClick={()=> onDeleteContact(contacts.id)}>Delete</button>
    </div> 
)

ContactListItem.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }),
    onDeleteContact:PropTypes.func.isRequired
};

export default ContactListItem;