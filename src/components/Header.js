import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div data-target="#navbarSupportedContent" data-offset="57">
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">Pokedex</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" to="/">Home<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/Pokemons">Pokemons List</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;