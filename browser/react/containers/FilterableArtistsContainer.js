import React, { Component } from 'react';

import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

class FilterableArtistsContainer extends Component {
  constructor () {
    super();

    this.state = {
      searchInput: '',
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearchInput (event) {
    const searchInput = event.target.value;
    this.setState({ searchInput: searchInput });
  }

  render () {
    const inputValue = this.state.searchInput;
    const filteredArtists = this.props.artists.filter(artist =>
    artist.name.toLowerCase().match(inputValue.toLowerCase()));

    return (
      <div>
        <FilterInput handleSearchInput={ this.handleSearchInput }/>
        <Artists artists={ filteredArtists }/>
      </div>
    )
  }
}

export default FilterableArtistsContainer;
