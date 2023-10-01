import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
const MOCK_API_URL = "https://650fc3383ce5d181df5ca880.mockapi.io/Friends";  
  
const [newFirstName, setNewFirstName] = useState('')
const [newLastName, setNewLastName] = useState('')
const [friends, setFriends] = useState([])
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

function postNewFriends(e) {
  e.preventDefault()
  fetch(MOCK_API_URL, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      firstName: newFirstName,
      lastName: newLastName,
    })
  }).then(() => getFriends())
}

function updateFriends(e, friendsObject) {
  e.preventDefault()
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

  }

    return (
    <div className="App">
    <form bgcolor="blue">
      <h3>Post new friends form</h3>
      <label>First Name</label>
      <input onChange={(e) => setNewFirstName(e.target.value)}></input>
      <label>Last Name</label>
      <input onChange={(e) => setNewLastName(e.target.value)}></input>
      <button onClick={(e) => postNewFriends(e)}>Submit</button>
    </form>
      {friends.map((friends, index) => (
        <div className="friendsContainer" key={index}>
          <div>
            firstName: {friends.firstName} <br></br>
            lastName: {friends.lastName} <br></br>
            <button onClick={() => deleteFriends(friends.id)}>Delete</button>
          </div>
          <form>
          <label>Update First Name</label>
          <input onChange={(e) => setUpdatedFirstName(e.target.value)}></input>
          <label>Update Last Name</label>
          <input onChange={(e) => setUpdatedLastName(e.target.value)}></input>
          <button onClick={(e) => updateFriends(e, friends)}>Update</button>
          </form>
        </div>
       ))}
       </div>
    )
    
}



export default App;




