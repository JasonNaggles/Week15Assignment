import React, { useState } from 'react'; 


export default function AddFriends({getFriends}) {

const API_URL = "https://650fc3383ce5d181df5ca880.mockapi.io/Friends"

const [newFriend, setNewFriend] = useState('')
const [newFirstName, setNewFirstName] = useState('')
const [newLastName, setNewLastName] = useState('')


function addFriends(e) {
    e.preventDefault()
    fetch(API_URL, {
        method: 'POST',
        headers: 
        {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({

        })
    })
}

}