import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../redux/selector';
import { addContact, deleteContact } from '../redux/contactsSlice';
import { setFilter } from '../redux/filterSlice';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleaddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = filterValue => {
    dispatch(setFilter(filterValue));
  };

  const filterContact = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleaddContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={handleFilterChange} />
      <ContactList
        filterContact={filterContact}
        deleteContact={handleDeleteContact}
      />
    </div>
  );
};
