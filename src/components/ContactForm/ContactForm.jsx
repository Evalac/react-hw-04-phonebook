import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';

function ContactForm({ addNewContact, initialValue }) {
  const [contactName, setConatctName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const submitForm = e => {
    e.preventDefault();

    const result = initialValue.some(({ name }) => name === contactName);
    if (result) {
      alert('Такий контакт вже є');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: contactName,
      number: contactNumber,
    };
    addNewContact(newContact);
  };

  return (
    <form className={css.formNewContact} onSubmit={submitForm}>
      <label className={css.labelNewContact} htmlFor="name">
        Name
        <input
          className={css.inputNewContact}
          onChange={e => {
            setConatctName(e.target.value);
          }}
          value={contactName}
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.labelNewContact} htmlFor="number">
        Number
        <input
          className={css.inputNewContact}
          onChange={e => {
            setContactNumber(e.target.value);
          }}
          value={contactNumber}
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.buttonNewContact} type="submit">
        Add contact
      </button>
    </form>
  );
}

export { ContactForm };
