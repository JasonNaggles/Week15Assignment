import React from 'react';
import './App.css';

const HOUSES_ENDPOINT = 'https://ancient.taiga-31359.herokuapp.com/api/houses';

export default class App extends React.Component {
  constructor(props) {
        super(props);
        this.addNewRoom = this.addNewRoom.bind(this);
        this.deleteRoom = this.deleteRoom.bind(this);
  }

}
