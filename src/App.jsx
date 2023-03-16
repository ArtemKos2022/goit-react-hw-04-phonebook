import { nanoid } from 'nanoid';
import { useState, useEffect } from "react";

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/ContactsFilter/Filter';

import { Container } from './App.styled';

const startingContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];


    export default function App() {
      const [contacts, setContacts] = useState(() => {
          const items = localStorage.getItem('contacts');
          if (items) {
              return JSON.parse(items);
          } else {
              return startingContacts
          }
      });
      const [filter, setFilter] = useState("");
  
      useEffect(() => {
          localStorage.setItem("contacts", JSON.stringify(contacts));
      }, [contacts]);
  
      const formSubmitHandler = ({ name, number }) => {
          const normalizedContact = name.toLowerCase();
          const isExist = contacts.find(contact => contact.name.toLowerCase() === normalizedContact)
          if (isExist) {
              alert(`${name} is already in contacts`);
          } else {
              const contact = { id: nanoid(), name, number};
              setContacts(state => [contact, ...state]);
          }
      };
  
      const deleteContact = (contactId) => {
          setContacts((contacts) =>
              contacts.filter((contact) => contact.id !== contactId)
          );
      };
  
      const changeFilter = (evt) => {
          setFilter(evt.currentTarget.value);
      };
  
      const getVisibleContacts = () => {
          const normalizedFilter = filter.toLowerCase();
          return contacts.filter(contact =>
              contact.name.toLowerCase().includes(normalizedFilter),
          );
      };
      
      return (
          <Container>
              <h1>Phonebook</h1>
              <ContactForm onSubmit={formSubmitHandler}/>
              <h2>Contacts</h2>
              <Filter value={filter} onChange={changeFilter}/>
              <ContactList
                  contacts={getVisibleContacts()}
                  onDeleteContact={deleteContact}
              />
          </Container>
      );
  }
