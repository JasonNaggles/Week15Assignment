import React, { useState } from 'react';
import FriendsList from './Components/FriendsList';
import NewFriendForm from './Components/NewFriendForm';
import './App.css';

function App() {

  // Define state variables using the 'useState' hook.
  const [friends, setFriends] = useState(); // Initialize the friends list with mock data.
  const [selectedFriend, setSelectedFriend] = useState(null); // Initialize selectedFriend as null.

// Function to add a new friend to the list.
const addFriend = (friend) => {
  const newFriend = { id: Date.now(), ...friend }; // Create a new friend object with a unique ID.
  setFriends([...friends, newFriend]); // Add the new friend to the 'friends' state.
};

// Function to edit an existing friend.
const editFriend = (friend) => {
  setSelectedFriend(friend); // Set the selected friend to enable editing.
};

// Function to update a friend's information.
const updateFriend = (updatedFriend) => {
  const updatedFriends = friends.map((friend) =>
    friend.id === updatedFriend.id ? updatedFriend : friend
  ); // Map through the friends list and update the selected friend.
  setFriends(updatedFriends); // Update the 'friends' state with the modified list.
  setSelectedFriend(null); // Clear the selected friend after editing.
};

// Function to delete a friend from the list.
const deleteFriend = (friendId) => {
  const updatedFriends = friends.filter((friend) => friend.id !== friendId); // Filter out the friend to delete.
  setFriends(updatedFriends); // Update the 'friends' state with the modified list.
};

return (
  <div>
    <h1>Friends List</h1>
    {/* Render the FriendForm component and pass the 'addFriend' or 'updateFriend' function as a prop. */}
    <NewFriendForm onSubmit={selectedFriend ? updateFriend : addFriend} />
    {/* Render the FriendsList component and pass the 'friends' list, 'deleteFriend', and 'editFriend' functions as props. */}
    <FriendsList
      friends={friends}
      onDelete={deleteFriend}
      onEdit={editFriend}
    />
  </div>
);
} 

export default App;
