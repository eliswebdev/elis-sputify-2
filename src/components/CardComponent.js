import React, { useContext, useEffect } from "react";
import '../scss/components/card.scss';


export const CardComponent = ({name, description, img})=> {
    return <div className="card">
        {name} 
    </div>
}