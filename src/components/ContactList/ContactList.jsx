import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul>
        {contacts.map(contact =>
            <ContactListItem
                key={contact.id}
                contact={contact}
                onDeleteContact={onDeleteContact}
            />
        )}
    </ul>
    
);
export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};