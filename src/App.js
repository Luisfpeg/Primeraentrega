import React from 'react';
import {Header} from "./Componentes/Header"
import 'boxicons';
import { BrowserRouter as Router } from "react-router-do";
import {Paginas} from "./Componentes/Paginas";
import {DataProvider} from "./context/DataProvider"
import{ Carrito} from ".Componentes/Carrito";
import Navbar from './components/Navbar';

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
