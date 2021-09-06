import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={s.list}>
        {contacts.map(({id, name, number})=> (
            <li key={id} className={s.item} >
                <p>{name}:<span>{number}</span></p>
                <button onClick={()=> onDeleteContact(id)}>Delete</button>
            </li>
        ))}
    </ul>
)

export default ContactList;