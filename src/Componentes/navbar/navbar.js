import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


const App = () => {
    return ( <
        Router >
        <
        Navbar / >
        <
        Switch >

        <
        Route path = "/productos" > { productos } </Route>  <
        Route path = "/carrito" > { carrito } </Route>  <
        Route path = "/contacto" > { contacto } </Route> <
        Route path = "/" > { inicio } </Route> </Switch > </Router>
    );
};

export default App;