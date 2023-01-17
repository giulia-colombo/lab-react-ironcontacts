import logo from './logo.svg';
import './App.css';
import contactsArr from "./contacts.json"
import React, { useState } from 'react';



function App() {

  const fiveContacts = contactsArr.slice(0,5)
  const [contacts, setContacts] = useState(fiveContacts);

  const addRandomContact = () => {
    const randomContact = contactsArr[Math.floor(Math.random()*contactsArr.length)];
    console.log(randomContact)
    const fiveContactsCopy = [...fiveContacts]
    fiveContactsCopy.push(randomContact)
    setContacts(fiveContactsCopy)
  }

  const deleteActor = contactId => {
    const filteredActors = contacts.filter(contact => {
      return contact.id !== contactId;
    });
    setContacts(filteredActors);
  };


  return (
    <div className="App">
    <h1>IronContacts</h1>
    <button onClick={addRandomContact}>Add a random contact</button>
      <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Grammy</th>
        </tr>
      </thead>
      <tbody>
   
        {contacts.map(actor => {
          return (
            <tr key={actor.id}>
            <td><img src={actor.pictureUrl} alt="picture"/></td>
            <td>{actor.name}</td>
            <td>{actor.popularity}</td>
            <td>{actor.wonOscar && <span>🏆</span>}</td>
            <td>{actor.wonEmmy && <span>🏆</span>}</td>
            <td><button onClick={() => deleteActor(actor.id)}>Delete celebrity</button></td>
            </tr>
          )
        })}

        </tbody>
      </table>
 


    </div>
  );
}

export default App;
