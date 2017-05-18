import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import AppContainer from './containers/AppContainer';
import FilterableArtistsContainer from './containers/FilterableArtistsContainer';
import NewPlaylistContainer from './containers/NewPlaylistContainer';

import Albums from './components/Albums';
import Album from './components/Album';
import Artist from './components/Artist';
import Songs from './components/Songs';
import SinglePlaylist from './components/SinglePlaylist';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer} foo={'foo'}>
      <Route path="/albums" component={Albums} />
      <Route path="/albums/:albumId" component={Album} />
      <Route path="/artists" component={FilterableArtistsContainer} />
      <Route path="/artists/:artistId" component={Artist}>
        <Route path="/artists/:artistId/albums" component={Albums} />
        <Route path="/artists/:artistId/songs" component={Songs} />
      </Route>
      <Route path="/playlists/new" component={NewPlaylistContainer} />
      <Route path="/playlists/:playlistId" component={SinglePlaylist} />
      <IndexRedirect to="/albums" />
    </Route>
  </Router>,
  document.getElementById('app')
);
