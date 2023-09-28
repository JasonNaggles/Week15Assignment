import React from 'react';

export default class EditRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editedRoom: { ...props.room }, // Initialize the edited room with the room data
    };
  }

  // Function to handle changes in the edit form
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      editedRoom: {
        ...prevState.editedRoom,
        [name]: value,
      },
    }));
  };

  // Function to send the PUT request to update the room
  updateRoom = () => {
    const { editedRoom } = this.state;
    const apiUrl = 'https://your-api-url.com/rooms'; // Replace with your API endpoint
    const roomId = editedRoom.id; // Replace with the ID of the room you want to update

    fetch(`${apiUrl}/${roomId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers you need, such as authentication tokens
      },
      body: JSON.stringify(editedRoom),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Handle the successful response data here
        console.log('Room updated successfully:', data);

        // Optionally, you can perform additional actions, such as updating the state or notifying the user of the successful update
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error updating room:', error);

        // Optionally, you can display an error message to the user
      });
  };

  render() {
    const { editedRoom } = this.state;

    return (
      <div>
        <h2>Edit Room</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={editedRoom.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="area">Area:</label>
            <input
              type="number"
              id="area"
              name="area"
              value={editedRoom.area}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="button" onClick={this.updateRoom}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

