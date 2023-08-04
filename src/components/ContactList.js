import React from 'react';
import Contact from './Contact';

const ContactList = ({ contacts, setContacts, setEditingContact }) => {
  const listStyle = {
    listStyle: 'none',
    padding: 0,
  };

  return (
    <ul style={listStyle}>
      {contacts.map((contact, index) => (
        <Contact 
          key={index} 
          contact={contact} 
          setContacts={setContacts} 
          setEditingContact={setEditingContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
