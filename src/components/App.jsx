import { useEffect, useState } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const contacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contact, setConatct] = useState(() => {
    const savedContacts = localStorage.getItem('contact');
    return savedContacts ? JSON.parse(savedContacts) : contacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contact));
  }, [contact]);

  const addNewContact = newContact => {
    setConatct(prevState => [...prevState, newContact]);
  };

  const deleteContact = id => {
    setConatct(prevState => prevState.filter(contact => contact.id !== id));
  };

  const filterContact = e => {
    setFilter(e.target.value);
  };

  const filterContacts = contact.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ContactForm addNewContact={addNewContact} initialValue={contact} />
      <Filter value={filter} filterContact={filterContact} />
      <ContactList contacts={filterContacts} deleteContact={deleteContact} />
    </div>
  );
};
