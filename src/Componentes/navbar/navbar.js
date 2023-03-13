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