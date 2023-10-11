import React, { useContext, useEffect } from "react";
import axios from 'axios'
import PlaylistContext from '../providers/playlistContext';
import '../scss/components/playlist.scss';
import { Link } from "gatsby"


export const PlaylistComponent = ()=> {
    const [ playlist, setPlaylist ] = useContext(PlaylistContext);

    useEffect(()=>{
        
        const fetchData = async () => {
            const {data} = await axios.get('http://localhost:3000/playlists')
            setPlaylist(data)
        };
      
        fetchData();

    }, []); 

    return <div className="playlist">
        {playlist.map( item =>
            <div key={item.id}>
                <Link to={`/playlist-${item.id}`}>{item.name}</Link>
            </div>
        )}
    </div>
}