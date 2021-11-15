import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from './contacts-actions';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:4040';

// axios.defaults.baseURL = 'https://61901063f6bf450017484b36.mockapi.io';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactsRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactsSuccess(data));
  } catch (error) {
    dispatch(addContactsError(error));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(deleteContactsRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactsSuccess(id));
  } catch (error) {
    dispatch(deleteContactsError(error));
  }
};
//-------------------------------------------------//
// const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
//   const { data } = await axios.get('/contacts');
//   return data;
// });

// const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (name, number) => {
//     const contact = {
//       name,
//       number,
//     };
//     const { data } = await axios.post('/contacts', contact);
//     return data;
//   },
// );

// const deleteContact = createAsyncThunk('contacts/deleteContact', async id => {
//   await axios.delete(`/contacts/${id}`);
// });

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default contactsOperations;
