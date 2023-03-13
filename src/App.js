import React from 'react';
import {Header} from "./Componentes/Header"
import 'boxicons';
import { BrowserRouter as Router } from "react-router-do";
import {Paginas} from "./Componentes/Paginas";
import {DataProvider} from "./context/DataProvider"
import{ Carrito} from ".Componentes/Carrito";
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/productos">
          {/* Componente de productos */}
        </Route>
        <Route path="/carrito">
          {/* Componente de carrito */}
        </Route>
        <Route path="/contacto">
          {/* Componente de contacto */}
        </Route>
        <Route path="/">
          {/* Componente de inicio */}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

function App() {
  return (
    <DataProvider>
    <div className="App">       
      <Router>
        <Header/>
        <Carrito/>       
        <Paginas/>  
        </Router>      
    </div>
    </DataProvider>
  );
}

export default App;
