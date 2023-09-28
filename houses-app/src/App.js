import React from 'react';
import './App.css';
import House from './house';

const HOUSE_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

export default class App extends React.Component {
  constructor(props) {
        super(props);
        this.addNewRoom = this.addNewRoom.bind(this);
        this.deleteRoom = this.deleteRoom.bind(this);
        this.editRoom = this.editRoom.bind(this);
  }
  render() {
    const houses = this.state
    ? this.state.houses.map((house, index) => 
    <House
      key={index}
      data={house}
      addNewRoom={this.addNewRoom}
      deleteRoom={this.deleteRoom} 
      editRoom={this.editRoom}
      />)
    : null;
    return (
      <div>
        {houses}
      </div>
    );
  }

  componentDidMount() {
    fetch(HOUSE_ENDPOINT)
    .then(response => response.json())
    .then(data => {
      this.setState({
        houses: data
      });
    });
  }

  deleteRoom(e, house, room) {
    const index = house.rooms.indexOf(room);
    house.rooms.splice(index, 1);
    updateHouse(house)
    .then(() => {
    this.setState(state => {
      for ( let h of state.houses) {
        if(h._id === house._id) {
          let h = house;
          break;
        }
      }
      return state;
    });
    });
    e.preventDefault();
  }

  addNewRoom(e, house, room) {
    house.rooms.push(room)
    updateHouse(house)
    .then(() => {
    this.setState(state => {
      for ( let h of state.houses) {
        if(h._id === house._id) {
          let h = house;
          break;
        }
      }
      return state;
    });
    });
    e.preventDefault();
  }
  
  editRoom(e, house, updatedRoom) {
    // Find the index of the room to be updated in the house's rooms array.
    const roomIndex = house.rooms.findIndex((room) => room._id === updatedRoom._id);
  
    // If the room was found, update it with the new data.
    if (roomIndex !== -1) {
      house.rooms[roomIndex] = updatedRoom;
  
      // Send a PUT request to update the house's data on the server.
      updateHouse(house)
        .then(() => {
          this.setState((state) => {
            // Find the house in the state and update it.
            const updatedHouses = state.houses.map((h) => {
              if (h._id === house._id) {
                return house;
              } else {
                return h;
              }
            });
          
            return {
              houses: updatedHouses,
            };
          });
        });
      
      };
  
  
    e.preventDefault();
    
  }
}




function updateHouse(house) {
  return fetch(`${HOUSE_ENDPOINT}/${house._id}`,{
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(house)
  });
}
