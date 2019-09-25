import React, { Component } from 'react';

import PokemonsCard from './PokemonsCard'

class PokemonsList extends Component {
    render() {

        if (this.props.pokemons.length === 0) {
            return (
              <div>
                <h3>No pokemons were found</h3>
              </div>
            );
        }
        
        return (
            <div>
                <h3>Lista de pokemones</h3>
                <div>
                    <div className="form-group">
                      <label>Encuentra el pokemon que estás buscando</label>
                      <input type="text"className="form-control" placeholder="Ej. Pikachu"/>
                    </div>
                </div>
                <div>
                    {this.props.pokemons.map(pokemon => {
                        return(
                            <li key={pokemon.name}>
                                <PokemonsCard pokemon={pokemon}/>
                            </li>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default PokemonsList;