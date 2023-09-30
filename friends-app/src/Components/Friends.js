import React, { useEffect, useState } from 'react';
import FriendsList from './Components/FriendsList';
import NewFriendForm from './Components/NewFriendForm';
import Friends from './Components/Friends';



function Friends() {
const [friends, setFriends] = useState([]);
const [selectedFriend, setSelectedFriend] = useState(null);

    const getFriendsData = async () => {
      try {
        const response = await fetch("https://650fc3383ce5d181df5ca880.mockapi.io/Friends");
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
      setFriends(data); // Update the 'friends' state with the fetched data.
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getFriendsData();
  }, []);
      return (
        <div>
          <h1>Friends List</h1>
          <NewFriendForm onSubmit={selectedFriend ? updateFriend : addFriend} />
          <FriendsList
            friends={friends}
            onDelete={deleteFriend}
            onEdit={editFriend}
          />
        </div>
      );
    }

    export default Friends;