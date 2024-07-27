import { type } from '@testing-library/user-event/dist/type';
import { nanoid } from 'nanoid';

export const ADD_CONTACT = 'contacts/addContact';
export const DELETE_CONTACT = 'contacts/deleteContact';
export const SET_FILTER = 'filter/setFilter';

// export const addContact = ({ name, number }) => ({
//   type: ADD_CONTACT,
//   payload: {
//     id: nanoid(),
//     name,
//     number,
//   },
// });

// export const deleteContact = id => ({
//   type: DELETE_CONTACT,
//   payload: id,
// });

// export const setFilter = filter => ({
//   type: SET_FILTER,
//   payload: filter,
// });

import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
export const setFilter = createAction('filter/setFilter');
