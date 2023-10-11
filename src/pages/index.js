import React, { useState } from "react"
import '../scss/style.scss';
import PlaylistContext from '../providers/playlistContext';
import ArtistContext from '../providers/artistContext';
import { PlaylistComponent } from "../components/PlaylistComponent";
import { ArtistComponent } from "../components/ArtistComponent";

const IndexPage = () => {
  const [ playlist, setPlaylist ] = useState([]);
  const [ artists, setArtists ] = useState([]);

  return (
    <div className="container">
      <div className="block sidebar">
     
      </div>
      <div className="block main">
        <PlaylistContext.Provider value={[ playlist, setPlaylist ]}>
          <PlaylistComponent />
        </PlaylistContext.Provider>
      </div>
      <div className="block footer">
        <ArtistContext.Provider value={[ artists, setArtists ]}>
          <ArtistComponent />
        </ArtistContext.Provider>
      </div>
    </div>
    
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
