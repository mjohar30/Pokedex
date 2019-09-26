import React, { Component } from 'react';

import Loader from './Loader'

import './styles/PokemonsCard.css'

class PokemonsCard extends Component {
    
    state = {
        loading: true,
        error: null,
        data: {
            sprites: [],
            types: [{
                type: []
            }],
            abilities: [{
                ability: []
            }]
        },
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {

        this.setState({ loading: true, error: null });

        try {
          const response = await fetch(`${this.props.pokemon.url}`)
          const data = await response.json()
          this.setState({ loading: false, data: data });
        } catch (error) {
          this.setState({ loading: false, error: error });
        }
    }

    render() {

        if (this.state.loading === true) {
            return <Loader/>
        }

        return (
            <div className="container-fluid">
                <div className="pokemon-card row text-center align-items-center bg-light border border-dark rounded-lg">
                    <div className="col-2 p-2 border-dark">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input position-static" id={this.props.pokemon.name}/>
                        </div>
                    </div>
                    <div className="col-2 border-left border-right border-dark">
                        <img className="img-fluid" src={this.state.data.sprites.front_default} alt={this.props.pokemon.name}/>
                    </div>
                    <div className="col-3 border-right border-dark text-capitalize pokemon-card__item">
                        <p>{this.props.pokemon.name}</p>
                    </div>
                    <div className="col-2 border-right border-dark text-capitalize">
                        {this.state.data.types.map(pokemon => {
                            return(
                                <div key={`${this.props.pokemon.name}/${pokemon.type.name}`}>
                                    <li>{pokemon.type.name}</li>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-3 border-right text-capitalize">
                            {this.state.data.abilities.map(pokemon => {
                                return(
                                    <li key={`${this.props.pokemon.name}${pokemon.ability.name}`}>{pokemon.ability.name}</li>
                                )
                            })}
                    </div>
                </div>
            </div>
        );
    }
}

export default PokemonsCard;