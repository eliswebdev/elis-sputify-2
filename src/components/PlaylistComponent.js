import React, { useContext, useEffect } from "react";
import axios from 'axios'
import PlaylistContext from '../providers/playlistContext';
import '../scss/components/playlist.scss';
import { CardComponent } from "./CardComponent";


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
        <p>Playlist</p>
        <div className="card-list">
            {playlist.map( item =>
                <CardComponent key={item.id} {...item} />
            )}
        </div>
    </div>
}