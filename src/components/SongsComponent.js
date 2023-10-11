import React, { useContext, useEffect } from "react";
import axios from 'axios'
import SongsContext from '../providers/songsContext';


export const SongsComponent = ()=> {
    const [ song, setSong ] = useContext(SongsContext);

    useEffect(()=>{
        
        const fetchData = async () => {
            const {data} = await axios.get('http://localhost:3000/songs')
            setSong((song)=> {return{songs: data, ...song}})
        };
      
        fetchData();

    }, []); 

    console.log(song);

    return <div className="songs">
        {song.songs.map( item =>
            <div key={item.id} onClick={()=>setSong({currentSong: item, ...song})}>{item.title}</div>
        )}
    </div>
}