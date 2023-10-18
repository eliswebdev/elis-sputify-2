import React, { useContext, useState, useEffect } from "react";
import SongsContext from '../providers/songsContext';

export const PlayerComponent = ()=> {
    const [ time, setTime ] = useState(0);
    const {currentSong} = useContext(SongsContext);
    const { length = 0 } = currentSong;
    console.log(currentSong)
    useEffect(()=>{
        console.log(currentSong)
        const interval = setInterval(() => {
            setTime((time) => {
                if(time == length) {
                    clearInterval(interval);
                    return length
                }
                
                return time + 100
            }) 
        }, 1000);
    }, [currentSong]); 

    console.log(time)

    return <div className="player">
        <input
            type="range"
            id="player"
            name="player"
            min="0"
            max={length}
            value={time}
        />
    </div>
}