import React, { useContext, useEffect } from "react";
import axios from 'axios'
import ArtistContext from '../providers/artistContext';


export const ArtistComponent = ()=> {
    const [ artists, setArtists ] = useContext(ArtistContext);

    useEffect(()=>{
        
        const fetchData = async () => {
            const {data} = await axios.get('http://localhost:3000/artists')
            setArtists(data)
        };
      
        fetchData();

    }, []); 

    return <div className="artists">
        {artists.map( item =>
            <div key={item.id}>{item.name}</div>
        )}
    </div>
}