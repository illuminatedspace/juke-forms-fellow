import React from 'react';

const NewPlaylist = function (props) {
  return (
    <div className="well">
      <form className="form-horizontal" onSubmit={props.handleNameSubmit}>
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input
                className="form-control"
                type="text"
                onChange={ props.handleNameChange }
                value={ props.newPlaylistName }
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
          {
            props.dirtyField && props.errorMessage.length ?
              <div className="alert alert-warning">{ props.errorMessage }</div>
            : <button
                type="submit"
                className="btn btn-success"
                disabled={ props.submitDisabled }
              >
                Create Playlist
              </button>
          }
            </div>
          </div>
        </fieldset>
      </form>
    </div>
)}

export default NewPlaylist;
