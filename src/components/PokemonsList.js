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
            <div className="text-center">
                <h3 className="text-white">Lista de pokemones</h3>
                <div>
                    <div className="form-group">
                      <label className="text-white">Encuentra el pokemon que estás buscando</label>
                      <input type="text"className="form-control" placeholder="Ej. Pikachu"/>
                    </div>
                </div>
                <div>
                    <div className="container ">
                        <div className="pokemon-card row d-flex text-center bg-light border border-dark rounded-lg">
                            <div className="col-2 pl-2 border-dark">
                                <h4>Checar</h4>
                            </div>
                            <div className="col-2 border-left border-right border-dark">
                                <h4>Imágen</h4>
                            </div>
                            <div className="col-3 border-right border-dark">
                                <h4>Nombre</h4>
                            </div>
                            <div className="col-2 border-right border-dark">
                                <h4>Tipo</h4>
                            </div>
                            <div className="col-3 border-right">
                                <h4>Habilidades</h4>
                            </div>
                        </div>
                    </div>
                    {this.props.pokemons.map(pokemon => {
                        return(
                            <PokemonsCard key={pokemon.name} pokemon={pokemon}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default PokemonsList;