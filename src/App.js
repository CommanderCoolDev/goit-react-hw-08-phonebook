import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

import './App.css';

export default function App() {
  return (
    <div className="block">
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
