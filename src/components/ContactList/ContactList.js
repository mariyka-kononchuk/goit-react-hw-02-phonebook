import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ options }) => (
    <ul className={s.list}>
        {options.map(option=> (
            <li className={s.item} key={option.id}>
                <p>{option.name}:<span>{option.number}</span></p>
            </li>
        ))}
    </ul>
)

export default ContactList;