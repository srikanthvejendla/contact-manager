import React, { useContext } from 'react';
import ContactContext from '../ContactContext';

const contactStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  margin: '10px 0',
  border: '1px solid #333',
  borderRadius: '5px',
  width: '400px',
};

const buttonStyle = {
  margin: '0 5px',
  padding: '5px 10px',
  borderRadius: '5px',
  border: '1px solid black',
  cursor: 'pointer',
};

const deleteButtonStyle = {
  ...buttonStyle,
  backgroundColor: 'red',
  color: 'white',
  border: 'none',
};

const Contact = ({ contact }) => {
  const { setContacts, setEditingContact } = useContext(ContactContext);

  const deleteHandler = () => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const updatedContacts = contacts.filter(c => c.email !== contact.email);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    setContacts(updatedContacts);
    setEditingContact(null);
  };

  const editHandler = () => {
    setEditingContact(contact);
  };

  return (
    <li style={contactStyle}>
      <div>
        <p><strong>Name:</strong> {contact.name}</p>
        <p><strong>Email:</strong> {contact.email}</p>
      </div>
      <div>
        <button onClick={editHandler} style={buttonStyle}>Edit</button>
        <button onClick={deleteHandler} style={deleteButtonStyle}>Delete</button>
      </div>
    </li>
  );
};

export default Contact;
