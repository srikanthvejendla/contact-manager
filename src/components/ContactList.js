import React, { useContext } from 'react';
import Contact from './Contact';
import ContactContext from '../ContactContext';

const listStyle = {
  listStyle: 'none',
  padding: '0',
};

const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <ul style={listStyle}>
      {contacts.map((contact, index) => (
        <Contact 
          key={index} 
          contact={contact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
