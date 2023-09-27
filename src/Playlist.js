// Module to create the Playlist component
//Imports
import React, {useState} from 'react';
import SearchResults from './SearchResults';

// Playlist component

const Playlist = (addedTrack) => {
   const {playlistName, setPlaylistName} = useState('New Playlist');
    const {playlistTracks, setPlaylistTracks} = useState([]);
    setPlaylistTracks(playlistTracks.push(addedTrack));
    
    return (
        <div>
            <input 
            value={playlistName} 
            onChange={setPlaylistName}
            >
            {playlistName}
            </input>
            <ul>{playlistTracks}</ul>
            <button className='saveSpotify' type='submit'>SAVE TO SPOTIFY</button>
        </div>
    )
};

export default Playlist;