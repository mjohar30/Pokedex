import React from 'react';

import './styles/Footer.css'

function Footer() {
    return (
        <footer id="footer" className="pt-2 m-0 bg-danger">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12 col-lg">
                        <a className="text-white" href="https://pokeapi.co/">Pokeapi</a>
                    </div>
                    <div className="col-12 col-lg">
                        <a className="text-white" href="https://mjohar30.github.io/Portafolio/">Mi portafolio</a>
                    </div>
                    <div className="col-12 col-lg">
                        <a className="text-white" href="https://github.com/mjohar30/Pokedex">Repositorio del proyecto</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer