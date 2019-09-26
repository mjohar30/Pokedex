import React from 'react'
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Layout from './components/Layout'

import Home from './pages/Home'
import Pokemons from './pages/Pokemons'
import NotFound from './pages/NotFound' 

function App() {
  return (
    <BrowserRouter>
      {/* El layout es una plantilla que permite que todos las páginas de nuestro sitio
      contengan el Header y el Footer, para que nuestro contenido se renderice enmedio
      de estos componentes */}
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Pokemons" component={Pokemons}/>
          <Route path="/404" component={NotFound}/>
          {/* Si el usuario llegara a ingresar una dirección no válida, 
          será redireccionado al componente NotFound sólo para notificarle
          que no fue exitosa su búsqueda */}
          <Redirect from="*" to="/404"/>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
