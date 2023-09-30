import React, { useEffect, useState } from 'react';
import UpdateFriends from './Components/UpdateFriends';
import DeleteFriends from './Components/DeleteFriends'

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

  const onUpdate = (friendId) => {
    UpdateFriends(friendId);
  };

  const onDelete = (friendId) => {
    DeleteFriends(friendId);
  };


      return (
        <div>
          <div>
          <h1 className="text-center">Friends List</h1>
          <addFriends getFriends={getFriends} />
          </div>
          <div className="displayFriends text-center">
            {friends.map((friends, index) => (
            <>
          <UpdateFriends friendId={friends.id} getFriends={getFriends} onUpdate={onUpdate} />
          <DeleteFriends friendId={friends.id} getFriends={getFriends} onDelete={onDelete} />
          </>
            ))}
          </div>
        </div>
      )
     }