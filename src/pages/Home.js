import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import './styles/Home.css'

function Home() {
    return (
        <Fragment>
            <div className="container home">
                <div className="row align-items-center">
                    <div className="col-12">
                        <img className="img-fluid mx-auto d-block logo" src="https://res.cloudinary.com/dioxkbk6g/image/upload/v1569205776/Pokeapi/logo-6221638601ef7fa7c835eae08ef67a16_xokydx.png" alt="Pokeapi"/>
                    </div>
                </div>
                <div className="row align-items-center mt-3">
                    <div className="col-12 col-lg-6 text-center text-lg-left text-white">
                        <h1 className="text-uppercase">La mejor forma de organizar tus pokemons</h1>
                        <p>
                            Con la pokedex, podrás encontrar todos los pokemons que existen
                            actualmente. Anímate y vuélvete el mejor, mejor que nadie más.
                        </p>
                        <Link className="btn btn-warning" to="/Pokemons">
                            ¡Empieza ya!
                        </Link>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img className="img-fluid" src="https://res.cloudinary.com/dioxkbk6g/image/upload/v1569205854/Pokeapi/Generation1-Starters-1024x467_dqfrvt.png" alt="Imagen de pokemons"/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home