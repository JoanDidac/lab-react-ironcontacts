import OscarIcon from './images/Oscar icon.png';
import EmmyIcon from './images/Emmy icon.png';
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
    setExtraContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== randomContact.id));
  }
  const sortName = () => { 
    setContacts(prevContacts => {
    const sortedContacts = [...prevContacts].sort((a,b) => { //a.name.localCompare(b.name));setContacts(sortedContacts); NOT WORKING?! WHY 😤
      if (a.name < b.name){
        return -1;
      } if (a.name > b.name) {
        return 1;
      }
      return 0;
    }) 
    return sortedContacts;
  })
}
  const sortPopularity = () => {
    const sortedContacts = [...contacts].sort((a,b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
  }

  return (
    <div className="App">
      <div className='buttons'>
     <button className='random-btn' onClick={addRandomContact}>Add Actor</button>
     <button className='sortName-btn' onClick={sortName}>Sort Names</button>
     <button className='sortPopularity-btn' onClick={sortPopularity}>Sort Popularity</button>
     </div>
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
            {/* this width should be transferred to CSS ? */}
          </td>
          <td> {contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          <td>{contact.wonEmmy ? <img src= {OscarIcon} className='award-icon' width={60} /> : '☒ '} </td>
          <td>{contact.wonOscar ? <img src= {EmmyIcon} className='award-icon' width={59}/> : '☒'}</td>

          <button className='delete-btn' onClick={() => setContacts(prevContacts => prevContacts.filter(({id}) => id !== contact.id))} //added the destructured id before the comparison not after idiot ,35 mmin lost
          
          >Delete Actor</button>
          
          </tr>
         

        ))}

        </tbody>
    </table>
    </div>
  );
}

export default App;
