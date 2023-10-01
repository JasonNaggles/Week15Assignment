import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
const MOCK_API_URL = "https://650fc3383ce5d181df5ca880.mockapi.io/Friends"  
  
const [newFirstName, setNewFirstName] = useState('')
const [newLastName, setNewLastName] = useState('')
const [friends, setFriends] = useState('')
const [updatedFirstName, setUpdatedFirstName] = useState('')
const [updatedLastName, setUpdatedLastName] = useState('')

  
function getFriends() {
  fetch(MOCK_API_URL)
  .then(data => data.json())
  .then(data => setFriends(data))
}

useEffect(() => {
  getFriends()
}, [])

function deleteFriends(id) {
  fetch(`${MOCK_API_URL}/${id}`, {
    method: 'DELETE',
  }).then(() => getFriends())
}

function postNewFriends() {
  fetch(MOCK_API_URL, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      firstName: newFirstName,
      lastName: newLastName,
    })
  }).then(() => getFriends())
  }
}

function updateFriends(friendsObject) {

  let updatedFriendsObject = {
    ...friendsObject,
    firstName: updatedFirstName,
    lastName: updatedLastName,
  }
  fetch(`${MOCK_API_URL}/${friendsObject.id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedFriendsObject),
    headers: {
      "Content-Type": "application/json"},
    }).then(() => getFriends())





    return (
    <div className="App">
    <form>
      <h3>Post new friends form</h3>
      <label>First Name</label>
      <input onChange={(e) => setUpdatedFirstName(e.target.value)}></input>
      <label>Last Name</label>
      <input onChange={(e) => setUpdatedLastName(e.target.value)}></input>
    </form>
      {friends.map((friends, index) => (
        <div key={index}>
          <div>
            firstName: {friends.firstName}
            lastName: {friends.lastName}
            <button onClick={() => deleteFriends(friends.id)}></button>
          </div>
        </div>
       ))}
       </div>
    )
    
}


export default App;




