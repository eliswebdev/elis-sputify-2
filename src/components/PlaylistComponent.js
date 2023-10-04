import React, { useContext, useEffect } from "react";
import PlaylistContext from '../providers/playlistContext';

export const PlaylistComponent = ()=> {
    const [ playlist, setPlaylist ] = useContext(PlaylistContext);

    useEffect(()=>{
        fetch('http://localhost:3000/playlists')
            .then(resp => {
                resp.json()
            })
            .then(data => { setPlaylist(data) })
    }, [playlist]);

    console.log(playlist)

    return <div className="playlist">{playlist}</div>
}