import React, { useState } from "react"
import '../../scss/style.scss';
import SongsContext from "../../providers/songsContext";
import { SongsComponent } from "../../components/SongsComponent";
import { PlayerComponent } from "../../components/PlayerComponent";

const SongsPage = () => {
  const [ song, setSong ] = useState({songs: [], currentSong: {}});

  return (
    <div>
      <SongsContext.Provider value={[ song, setSong ]}>
        <SongsComponent />
        <PlayerComponent />
      </SongsContext.Provider>
    </div>
    
  )
}

export default SongsPage

export const Head = () => <title>Songs Page</title>
