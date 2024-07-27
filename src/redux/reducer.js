import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './action';

const initialContactsState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialFilterState = '';

// export const contactsReducer = (state = initialContactsState, action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return [...state, action.payload];
//     case DELETE_CONTACT:
//       return state.filter(contact => contact.id != action.payload.id);
//     default:
//       return state;
//   }
// };

// export const filterReducer = (state = initialFilterState, action) => {
//   switch (action.type) {
//     case SET_FILTER:
//       return action.payload;
//     default:
//       return state;
//   }
// };

import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './action';

export const contactsReducer = createReducer(initialContactsState, {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id != action.payload.id),
});

export const filterReducer = createReducer(initialContactsState, {
  [setFilter]: (state, action) => action.payload,
});
