import React, { useState, useEffect } from 'react';

const ContactForm = ({ setContacts, editingContact, setEditingContact }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    const buttonText = editingContact ? 'Update Contact' : 'Add Contact';

  
    useEffect(() => {
      if (editingContact) {
        setName(editingContact.name);
        setEmail(editingContact.email);
      }
    }, [editingContact]);

  const validateEmail = email => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!name || !email) {
      setError('Name and Email fields cannot be empty');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    if (editingContact) {
      const index = contacts.findIndex(contact => contact.email === editingContact.email);
      contacts[index] = { name, email };
    } else {
      contacts.push({ name, email });
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
    setName('');
    setEmail('');
    setContacts(contacts);
    setEditingContact(null); // reset the editing contact on successful submission
    setError(null); // reset error message on successful submission
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    width: '300px',
  };

  const errorStyle = {
    color: 'red',
    margin: '10px 0',
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

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <form onSubmit={submitHandler} style={formStyle}>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(event) => setName(event.target.value)}
        style={inputStyle}
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(event) => setEmail(event.target.value)}
        style={inputStyle}
      />
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