import React from 'react';

function FriendsList({ friends, onDelete, onEdit }) {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          {friend.name} ({friend.age} years old)
          <button onClick={() => onEdit(friend)}>Edit</button>
          <button onClick={() => onDelete(friend.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default FriendsList;