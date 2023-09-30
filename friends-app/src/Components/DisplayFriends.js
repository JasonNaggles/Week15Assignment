import React, { useEffect, useState } from 'react';
import FriendsList from './Components/FriendsList';
import NewFriendForm from './Components/NewFriendForm';
import DisplayFriends from './Components/DisplayFriends';



export default function DisplayFriends() {



    
        const API_URL = "https://650fc3383ce5d181df5ca880.mockapi.io/Friends";
        

        const [friends, setFriends] = useState([]);
          
  useEffect(() => {
    getFriends()
  }, [])


  function getFriends() {
      fetch(API_URL)
      .then((data) => data.json())
      .then((data) => {
        setFriends(data)
        console.log(data)
      })


  }


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

