import DisplayFriends from './Components/DisplayFriends';
import AddFriends from './Components/AddFriends';
import UpdateFriends from './Components/UpdateFriends'
import DeleteFriends from './Components/DeleteFriends';
import './App.css';

export default function App() {
  return (
    <>
      <div>
        <DisplayFriends />
        <AddFriends />
        <UpdateFriends friendId={friends.id} getFriends={getFriends} onUpdate={onUpdate}/>
        <DeleteFriends />
      </div>
    
    </>
);

}

