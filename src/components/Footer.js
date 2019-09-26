import React from 'react';
import {Link} from 'react-router-dom';

import './styles/Footer.css'

function Footer() {
    return (
        <footer id="footer" class="pt-2 m-0 bg-danger">
            <div class="container">
                <div class="row text-center">
                    <div class="col-12 col-lg">
                        <a className="text-white" href="https://pokeapi.co/">Pokeapi</a>
                    </div>
                    <div class="col-12 col-lg">
                        <a className="text-white" href="https://mjohar30.github.io/Portafolio/">Mi portafolio</a>
                    </div>
                    <div class="col-12 col-lg">
                        <a className="text-white" href="https://mjohar30.github.io/Portafolio/">Repositorio del proyecto</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer