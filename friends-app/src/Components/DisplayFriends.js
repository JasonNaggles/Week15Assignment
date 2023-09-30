import React, { useEffect, useState } from 'react';
import UpdateFriends from './UpdateFriends';
import DeleteFriends from './DeleteFriends';

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

  const onUpdate = async (friendId) => {
    try {
      const response = await fetch(`${API_URL}/${friendId}`, {
        method: 'PUT', // Use the appropriate HTTP method for updating.
        headers: {
          'Content-Type': 'application/json',
        },
        // Provide the updated friend data in the request body.
        body: JSON.stringify({ /* Updated friend data */ }),
      });

      if (!response.ok) {
        throw new Error('Update failed');
      }
  
      // After successful update, fetch friends data again to reflect changes.
      getFriends();
    } catch (error) {
      console.error('Error updating friend:', error);
    }
  };
  

  const onDelete = async (friendId) => {
    try {
      const response = await fetch(`${API_URL}/${friendId}`, {
        method: 'DELETE', // Use the appropriate HTTP method for deleting.
      });

      if (!response.ok) {
        throw new Error('Delete failed');
      }
  
      // After successful deletion, fetch friends data again to reflect changes.
      getFriends();
    } catch (error) {
      console.error('Error deleting friend:', error);
    }
  };
  

      return (
        <div>
          <div>
          <h1 className="text-center">Friends List</h1>
          <AddFriends getFriends={getFriends} />
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
    };     