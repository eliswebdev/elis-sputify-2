import React, { useState } from "react"
import '../../scss/style.scss';
import SongsContext from "../../providers/songsContext";
import { SongsComponent } from "../../components/SongsComponent";
import { PlayerComponent } from "../../components/PlayerComponent";

const IndexPage = () => {
  const [ songs, setSongs ] = useState([]);
  const [ currentSong, setCurrentSong ] = useState({});


  return (
    <SongsContext.Provider value={{songs, setSongs, currentSong, setCurrentSong }}>
      <div className="container">
        <div className="block sidebar">
      
        </div>
        <div className="block main">
            <SongsComponent />
        </div>
        <div className="block footer"> 
            <PlayerComponent />
        </div>
      </div>
    </SongsContext.Provider>
  )
}

export default IndexPage

export const Head = () => <title>Songs Page</title>
