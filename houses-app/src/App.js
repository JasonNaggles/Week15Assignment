import React from 'react';
import './App.css';
import House from './house';

const API_URL = 'https://650cf06147af3fd22f680f95.mockapi.io/Houses_API/houses';

export default class App extends React.Component {
  constructor(props) {
        super(props);
        this.addNewRoom = this.addNewRoom.bind(this);
        this.deleteRoom = this.deleteRoom.bind(this);
  }
  render() {
    const houses = this.state
    ? this.state.houses.map((house, index) => 
    <House
      key={index}
      data={house}
      addNewRoom={this.addNewRoom}
      deleteRoom={this.deleteRoom} />)
    : null;
    return (
      <div>
        {houses}
      </div>
    );
  }

  componentDidMount() {
    fetch(API_URL)
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
}

function updateHouse(house) {
  return fetch(`${HOUSES_ENDPOINT}/${house._id}`,{
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(house)
  });
}
