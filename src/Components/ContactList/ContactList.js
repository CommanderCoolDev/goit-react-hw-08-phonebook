import PropTypes from 'prop-types';

import s from './ContactList.module.css';

import { useSelector, useDispatch } from 'react-redux';
// import contactsActions from '../../redux/contact/contacts-actions';
import { getVisibleContacts } from '../../redux/contact/contacts-selectors';
import contactsOperations from '../../redux/contact/contacts-operations';
import { useEffect } from 'react';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <span className={s.span}>{name}: </span>
          <span className={s.span}>{number}</span>
          <button onClick={() => onDeleteContact(id)} className={s.btn}>
            DELETE!!!!!
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
