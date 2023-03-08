import React from "react";
import Slym from "../../images/Slym.jpeg";
import { Link } from "react-router-dom";

export const Header = () => {
return (
    
    <header>
        <Link to="#">
        <div className="logo">
            <img src="Slym" alt="logo" width="150"/>
        </div>
        </Link>
        <ul>
            <li>
               <Link to="/">INICIO</Link> 
            </li>
            <li>
               <Link to="/productos">PRODUCTOS</Link> 
            </li>
        </ul>
        <div className="cart">
            <box-icon name= "cart"></box-icon>
            <spam lassName ="item_local">0</spam>

        </div>
    </header>
)

}