import React,{useContext} from "react";
import Slym from "../../images/Slym.jpeg";
import { Link } from "react-router-dom";
import {DataContext } from "../../context/Dataprovider";
import Navbar from './components/Navbar';

export const Header = () => {
    const value= useContext(DataContext);
    const [menu,setMenu] = value,menu;
    const [carrito] = value.carrito
    
    
    const toogleMenu= () => {
        setMenu(!menu)
    }

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
        <div className="cart" onClick={toogleMenu}>
            <box-icon name= "cart"></box-icon>
            <spam lassName ="item_local">{carrito.length}</spam>

        </div>
    </header>
)

}