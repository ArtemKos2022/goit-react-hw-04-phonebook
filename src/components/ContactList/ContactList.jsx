import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => (
    
    <ul>
        <ContactListItem contactsItem={contacts} onDeleteContact={onDeleteContact} />
    </ul>
);
export default ContactList;