import React from 'react';


export default function UpdateFriends ({friendId, onUpdate, getFriends}) {

const API_URL = "https://650fc3383ce5d181df5ca880.mockapi.io/Friends"

const UpdateFriends = () => {
    onUpdate(friendId)
    fetch(API_URL + `${friendId}` , {
        method: 'PUT', 
    }).then(() => getFriends())   
}
return (
    <div className="text-center"> 
        <button type="button" onClick= {UpdateFriends}> Update Friends </button>
    </div>
);
}