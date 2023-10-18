import React, { useContext, useEffect } from "react";
import '../scss/components/card.scss';
import { Link } from "gatsby"


export const CardComponent = ({id, name, description, img})=> {
    return <Link to={`/playlist-${id}`}>
        <div className="card">
        {name}
    </div>
    </Link>
}