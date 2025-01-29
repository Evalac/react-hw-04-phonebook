import { useEffect, useState } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

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

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contact));
  }, [contact]);

  // useEffect(() => {
  //   const localStorageContacts = JSON.parse(localStorage.getItem('contact'));
  //   if (localStorageContacts) {
  //     console.log(localStorageContacts);

  //     setConatct(localStorageContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contact', JSON.stringify(contact));
  // }, [contact]);

  const addNewContact = newContact => {
    setConatct(prevState => [...prevState, newContact]);
  };

  return (
    <div>
      <ContactForm addNewContact={addNewContact} />
      <ContactList contacts={contact} />
    </div>
  );
};
