import React, { useState, useEffect, useContext } from 'react';
import ContactContext from '../ContactContext';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  marginBottom: '20px',
};

const inputStyle = {
  marginBottom: '10px',
  padding: '10px',
  fontSize: '16px',
};

const errorStyle = {
  color: 'red',
  marginBottom: '10px',
};

const buttonStyle = {
  backgroundColor: '#1a73e8',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  padding: '10px 25px',
  fontSize: '14px',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const buttonHoverStyle = {
  backgroundColor: '#1558d6',
};

const ContactForm = () => {
  const { setContacts, editingContact, setEditingContact } = useContext(ContactContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setEmail(editingContact.email);
    }
  }, [editingContact]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!name || !email) {
      setError('Please fill in all fields');
    } else {
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      const updatedContacts = contacts.filter(contact => contact.email !== email);
      const newContact = { name, email };
      updatedContacts.push(newContact);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      setContacts(updatedContacts);
      setEditingContact(null);
      setName('');
      setEmail('');
      setError(null);
    }
  };

  const buttonText = editingContact ? 'Update Contact' : 'Add Contact';

  const toggleHover = () => setHovered(!hovered);

  return (
    <form onSubmit={submitHandler} style={formStyle}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
      <button 
        type="submit" 
        style={hovered ? {...buttonStyle, ...buttonHoverStyle} : buttonStyle}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        {buttonText}
      </button>
      {error && <div style={errorStyle}>{error}</div>}
    </form>
  );
};

export default ContactForm;
