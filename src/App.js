//=================| Import |=================//

import React from "react"
import "./App.css";
import contactsArray from "./contacts.json"
import { useState } from "react"

function App() {

//=================| Iteration 1 |=================//

const [contacts, setContacts] = useState(contactsArray.slice(0,5));
const [remainingContacts, setRemainingContacts] = useState(contactsArray.slice(5));

//=================| Iteration 3 |=================//

const addRandomContact = () => {

  const randomNumber = Math.floor(Math.random() * remainingContacts.length);

  const contactsCopy = [...contacts];
  const remainingContactsCopy = [...remainingContacts];

  const chosenContactArray = remainingContactsCopy.splice(randomNumber, 1);

  contactsCopy.push(chosenContactArray[0]);

  setContacts(contactsCopy);
  setRemainingContacts(remainingContactsCopy);
};

//=================| Iteration 4.1 Sort by name |=================//

const sortByName = () => {
  const contactsCopy = [...contacts];

  contactsCopy.sort((a,b) => {
    return a.name.toLowerCase().localeCompare(b.name)
  });
  setContacts(contactsCopy);
}

//=================| Iteration 4.2 Sort by popularity |=================//

const sortByPopularity = () => {
  const contactsCopy = [...contacts];

  contactsCopy.sort((a,b) => {
    return b.popularity - a.popularity;
  })
  setContacts(contactsCopy);
}

//=================| Iteration 5 |=================//

const removeContacts = (contactId) => {

  const contactsCopy = [...contacts];
  const remainingContactsCopy = [...remainingContacts];

  const contactIndexToRemove = contactsCopy.findIndex(individualContact => {
    return individualContact.id === contactId;
  });
  
  const removedContactArray = contactsCopy.splice(contactIndexToRemove, 1);

  remainingContactsCopy.push(removedContactArray[0]);
  
  setContacts(contactsCopy);
  setRemainingContacts(remainingContactsCopy);

}
return (

//=================| App |=================//

  <div className="App">

  <h1>🎬 IronContacts</h1>

  <hr></hr>

  <div>

    <button onClick={addRandomContact}>🎲 Add Random Contact</button>
    <button onClick={sortByName}>🎫 Sort by Name</button>
    <button onClick={sortByPopularity}>🍿 Sort by Popularity</button>

  </div>

    <hr></hr>

      <table>
        <thead>

          <tr>
            <th> 📸 Picture</th>
            <th>| 🎫 Name |</th>
            <th>🍿 Popularity |</th>
            <th>🏆 Won an Oscar |</th>
            <th>⭐ Won an Emmy |</th>
            <th> 🗑️ Actions |</th>
          </tr>
          
        </thead>

        <hr></hr>

        <tbody>

        {/* //=================| Iteration 2 |=================// */}

          {contacts.map((person) => {
            return (

              <tr>
                <td><img src={person.pictureUrl} alt="pic"/></td>
                <td> ➤ 🎫 {person.name} |</td>
                <td>🍿 {person.popularity} |</td>
                <td>{person.wonOscar ? '🏆 |' : '🚫 |'}</td>
                <td>{person.wonEmmy ? '⭐ |' : '🚫 |'}</td>
                <td><button onClick={() => removeContacts(person.id)}> 🗑️ Delete </button></td>
              </tr>

            );
          })}
      
        </tbody>
      </table>

    </div>

  );
}

//=================| Export |=================//

export default App;