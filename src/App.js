import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import ContactContext from './ContactContext';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // justifyContent: 'center',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#F7F7F7',
  minHeight: '100vh',
};

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(contacts);
  }, []);

  return (
    <ContactContext.Provider value={{ contacts, setContacts, editingContact, setEditingContact }}>
      <div style={appStyle}>
        <h1>Contact Manager</h1>
        <ContactForm />
        <ContactList />
      </div>
    </ContactContext.Provider>
  );
}

export default App;
