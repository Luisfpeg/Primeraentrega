import React from "react";
import portada from '../../images/Slym.jpeg';
import { Link } from "'react-router-dom";

export const Inicio = () => {
    return (
        <div className="inicio">
           <link to="">
            <h1 className="title">Inicio</h1>
           </link>
           <Link>
           <h1 className="title">Productos</h1>
           </Link>
           <img src={Slym} alt="incio"/>
        </div>
    )

    
}