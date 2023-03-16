import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem, Button, Text } from './ContactList.styled';

const ContactListItem = ({
  contact: { id, name, number },
  onDeleteContact,
}) => {
  return (
    <ContactItem>
      <Text>
        {name}: {number}
      </Text>
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </ContactItem>
  );
};
export default ContactListItem;

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
