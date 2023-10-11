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
    <div>
      <PlaylistContext.Provider value={[ playlist, setPlaylist ]}>
        <PlaylistComponent />
      </PlaylistContext.Provider>

      <ArtistContext.Provider value={[ artists, setArtists ]}>
        <ArtistComponent />
      </ArtistContext.Provider>
    </div>
    
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
