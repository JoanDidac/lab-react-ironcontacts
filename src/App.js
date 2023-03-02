
import './App.css';
import contactsData from './contacts.json';
import React, {useState} from 'react';


const App = () => {

  const [contacts, setContacts] = useState(contactsData.slice(0,5))
  const [extraContacts, setExtraContacts] = useState(contactsData.slice(5))

  const addRandomContact = () => {
    const random = Math.floor(Math.random() * extraContacts.length);
    const randomContact = extraContacts[random]; // --->>> NOTA: not a function idiot!! its an array!! hence random must go between [] brackets!! 90 minutes of lost time, FOCUS!!!

    setContacts(prevContacts => [...prevContacts, randomContact]);
    setExtraContacts(prevContacts => prevContacts.filter(contact => contact.id !== randomContact.id));
  }

  return (
    <div className="App">
     <button className='random-btn' onClick={addRandomContact}>Add Random Contact</button>
     
    <table className='table'>
      <thread>
        <tr>
          <th className='tableHeader'>Picture</th>
          <th className='tableHeader' >Name</th>
          <th className='tableHeader'>Popularity</th>
          <th className='tableHeader'>Emmy</th>
          <th className='tableHeader'>Oscar</th>
        </tr>
        </thread>
        <tbody>
        {contacts.map((contact)=>(
          <tr key={contact.id} >
          <td>
            <img className='contactImg' src={contact.pictureUrl} alt={contact.name} width={100} /> 
            {/* this width should be transferred to CSS */}
          </td>
          <td> {contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          <td>{contact.wonEmmy ? '🏆' : '☒ '} </td>
          <td>{contact.wonOscar ? '🏆' : '☒'}</td>
          </tr>
         

        ))}
        </tbody>
    </table>
    </div>
  );
}

export default App;
