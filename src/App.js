import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(contacts);
  }, []);

  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#F7F7F7',
    minHeight: '100vh',
  };

  return (
    <div style={appStyle}>
      <h1>Contact Manager</h1>
      <ContactForm 
        setContacts={setContacts} 
        editingContact={editingContact} 
        setEditingContact={setEditingContact}
      />
      <ContactList 
        contacts={contacts} 
        setContacts={setContacts} 
        setEditingContact={setEditingContact}
      />
    </div>
  );
}

export default App;
