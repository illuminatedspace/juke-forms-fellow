import React, { Component } from 'react';
import axios from 'axios'

import NewPlaylist from '../components/NewPlaylist'

class NewPlaylistContainer extends Component {
  constructor () {
    super();

    this.state = {
      newPlaylistName: '',
      submitDisabled: true,
      dirtyField: false,
      errorMessage: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameSubmit = this.handleNameSubmit.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  validateInput (input) {
    if (input.length < 1) {
      this.setState({
        submitDisabled: true,
        errorMessage: 'Please enter a name.'
      })
    } else if (input.length > 16) {
      this.setState({
        submitDisabled: true,
        errorMessage: 'The name must be less than 16 characters.'
      })
    } else {
      this.setState({
        submitDisabled: false,
        errorMessage: ''
      })
    }
  }

  handleNameChange (event) {
    const newPlaylistName = event.target.value;
    this.setState({
      newPlaylistName,
      dirtyField: true
    });
    this.validateInput(newPlaylistName)
  }

  handleNameSubmit (event) {
    event.preventDefault();
    console.log('newPlaylistName', this.state.newPlaylistName)
    this.setState({
      newPlaylistName: ''
    })
  }

  handleNameSubmit (event) {
    event.preventDefault();
    console.log('newPlaylistName', this.state.newPlaylistName)

  }

  render () {
    return (
      <NewPlaylist
        handleNameChange={this.handleNameChange}
        handleNameSubmit={this.handleNameSubmit}
        newPlaylistName={this.state.newPlaylistName}
        submitDisabled={this.state.submitDisabled}
        dirtyField={this.state.dirtyField}
        errorMessage={this.state.errorMessage}
      />
    )
  }
}

export default NewPlaylistContainer;
