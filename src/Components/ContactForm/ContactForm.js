import { useState } from 'react';
import shortid from 'shortid';
import s from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
// import * as  contactsActions from '../../redux/contact/contacts-actions';
import { getContacts } from '../../redux/contact/contacts-selectors';
import contactsOperations from '../../redux/contact/contacts-operations';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactNameId = shortid.generate();
  const contactNumberId = shortid.generate();

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name === '') {
      alert(`Введите, пожалуйста, имя контакта.`);
      return;
    }

    if (number === '') {
      alert(`Введите, пожалуйста, номер телефона контакта.`);
      return;
    }

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      reset();
      return;
    }

    dispatch(contactsOperations.addContact(name, number));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor={contactNameId}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id={contactNameId}
        />
      </label>
      <label className={s.label} htmlFor={contactNumberId}>
        Number
        <input
          className={s.input}
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          id={contactNumberId}
        />
      </label>

      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
