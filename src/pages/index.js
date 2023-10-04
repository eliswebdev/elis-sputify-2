import React, { useState } from "react"
import '../scss/style.scss'
import PlaylistContext from '../providers/playlistContext';
import { PlaylistComponent } from "../components/PlaylistComponent";

const IndexPage = () => {
  const [ playlist, setPlaylist ] = useState([]);

  return (
    <PlaylistContext.Provider value={[ playlist, setPlaylist ]}>
      <PlaylistComponent />
    </PlaylistContext.Provider>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
