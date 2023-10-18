import React, { useContext, useEffect } from "react";
import axios from 'axios'
import SongsContext from '../providers/songsContext';
import { CardComponent } from "./CardComponent";

export const SongsComponent = ()=> {
    const {songs, setSongs, setCurrentSong} = useContext(SongsContext);

    useEffect(()=>{
        
        const fetchData = async () => {
            const {data} = await axios.get('http://localhost:3000/songs');
            setSongs(data)
        };
      
        fetchData();

    }, []); 

    return <div className="songs">
        SONG
        <div className="card-list">
            {songs.map( item =>
            <div className="card" onClick={()=>setCurrentSong(item)} key={item.id}>{item.title}</div>
            )}
        </div>
    </div>
}