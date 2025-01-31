import css from './ContacList.module.css';

function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={css.containerList}>
      {contacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <button
            className={css.buttonDelete}
            type="button"
            onClick={() => {
              deleteContact(contact.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export { ContactList };
