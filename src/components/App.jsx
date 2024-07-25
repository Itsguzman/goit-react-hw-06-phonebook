import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const defaultContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    const savedLocalContacts = localStorage.getItem('contacts');
    const parsedContacts = savedLocalContacts
      ? JSON.parse(savedLocalContacts)
      : [];
    return parsedContacts.length > 0 ? parsedContacts : defaultContacts;
  });

  // useEffect(() => {
  //   const savedLocalContacts = localStorage.getItem('contacts');
  //   if (savedLocalContacts !== null) {
  //     setContacts(JSON.parse(savedLocalContacts));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevState => [...prevState, newContact]);
  };

  const handleDeleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const handleFilterChange = filterValue => {
    setFilter(filterValue);
  };

  const filterContact = () => {
    const filterLowerCase = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={handleFilterChange} />
      <ContactList
        filterContact={filterContact}
        deleteContact={handleDeleteContact}
      />
    </div>
  );
};
