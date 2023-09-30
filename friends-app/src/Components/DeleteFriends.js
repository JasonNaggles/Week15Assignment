import React from 'react';


export default function DeleteFriends ({ friendId, onDelete, getFriends}) {

const API_URL = "https://650fc3383ce5d181df5ca880.mockapi.io/Friends"

const deleteFriends = () => {
    onDelete(friendId)
    fetch(API_URL + `${friendId}` , {
        method: 'DELETE', 
    }).then(() => getFriends())   
}

return (
    <div className="text-center"> 
        <button type="button" onClick= {deleteFriends}> Delete Friends </button>
    </div>
);
}