import React, { useState } from 'react'; 


export default function AddFriends({getFriends}) {

const API_URL = "https://650fc3383ce5d181df5ca880.mockapi.io/Friends"

const [newFirstName, setNewFirstName] = useState('')
const [newLastName, setNewLastName] = useState('')


const AddFriends = () => {

    fetch(API_URL, {
        method: 'POST',
        headers: 
        {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName: newFirstName,
            lastName: newLastName
        }),
    }).then(() => getFriends())

    setNewFirstName('')
    setNewLastName('')

}

}