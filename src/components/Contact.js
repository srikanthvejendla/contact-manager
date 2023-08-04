import React, {useState} from 'react';

const Contact = ({ contact, setContacts, setEditingContact }) => {
  const deleteHandler = () => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    const filteredContacts = contacts.filter(c => c.email !== contact.email);
    localStorage.setItem('contacts', JSON.stringify(filteredContacts));
    setContacts(filteredContacts); // update state to trigger re-render
  };

  const editHandler = () => {
    setEditingContact(contact);
  };

  const contactStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #333',
    borderRadius: '5px',
    width: '400px',  // increase width
  };

  const buttonStyle = {
    margin: '0 5px',
    padding: '5px 10px',
    borderRadius: '5px',
    border: '1px solid #303134',
    color: 'white',
    backgroundColor: '#303134',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#5f6368',
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
  };

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <li style={contactStyle}>
      <div>
        <p><strong>Name:</strong> {contact.name}</p>
        <p><strong>Email:</strong> {contact.email}</p>
      </div>
      <div>
        <button 
          onClick={editHandler} 
          style={hovered ? {...buttonStyle, ...buttonHoverStyle} : buttonStyle}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          Edit
        </button>
        <button onClick={deleteHandler} style={deleteButtonStyle}>Delete</button>
      </div>
    </li>
  );
};

export default Contact;