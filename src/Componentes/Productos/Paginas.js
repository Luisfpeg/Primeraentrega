import React from "react";
import {Switch, Route, Router} from "react-router-dom"
import {Inicio} from "./Inicio";
import {ProductosLista} from "./Productos/index";
import Navbar from './components/Navbar';

export const Paginas = () => {
return (
    <section>
        <Switch>
            <Route path="/" exact component={Inicio}/>
            <Route path="/productos" exact component={ProductosLista} />
            </Switch>    
    </section>
    )
}