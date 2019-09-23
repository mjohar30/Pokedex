import React from 'react';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
                <a class="navbar-brand" href="#">Pokedex</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Pokemons</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;