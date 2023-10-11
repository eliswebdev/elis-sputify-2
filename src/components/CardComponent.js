import React, { useContext, useEffect } from "react";
import '../scss/components/card.scss';
import { Link } from "gatsby"


export const CardComponent = ({id, name, description, img})=> {
    return <div className="card">
        {name}
        <Link to={`/playlist-${id}`}>{name}</Link>
    </div>
}