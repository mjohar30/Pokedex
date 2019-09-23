import React, {Fragment} from 'react';

function Home() {
    return (
        <Fragment className="container">
            <div className="row align-items-center">
                <div className="col-12 col-md-6">
                    <img className="img-fluid" src="https://res.cloudinary.com/dioxkbk6g/image/upload/v1569205776/Pokeapi/logo-6221638601ef7fa7c835eae08ef67a16_xokydx.png" alt="Pokeapi"/>
                    <img className="img-fluid" src="https://res.cloudinary.com/dioxkbk6g/image/upload/v1569205854/Pokeapi/Generation1-Starters-1024x467_dqfrvt.png" alt="Imagen de pokemons"/>
                </div>
                <div className="col-12 col-md-6 text-center text-md-right">
                    <h1 className="text-uppercase">La mejor forma de organizar tus pokemons</h1>
                    <p>
                        Con la pokedex, podrás encontrar todos los pokemons que existen
                        actualmente. Anímate y vuélvete el mejor, mejor que nadie más.
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default Home