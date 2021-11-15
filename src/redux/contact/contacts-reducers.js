import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addContactsSuccess,
  deleteContactsSuccess,
  changeFilter,
  fetchContactsSuccess,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactsSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
