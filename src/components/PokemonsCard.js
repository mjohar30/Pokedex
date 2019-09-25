import React, { Component } from 'react';

import './styles/PokemonsCard.css'

class PokemonsCard extends Component {
    
    state = {
        loading: true,
        error: null,
        data: {
            sprites: [],
            types: [{
                type: []
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
        return (
            <div className="container">
                <div className="pokemon-card row text-center align-items-center bg-light border border-dark rounded-lg">
                    <div className="col-1 form-group">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    </div>
                    <div className="col-3">
                        <img src={this.state.data.sprites.front_default} alt={this.props.pokemon.name}/>
                    </div>
                    <div className="col-2 text-uppercase">
                        <p><strong>{this.props.pokemon.name}</strong></p>
                    </div>
                    <div className="col-3">
                        {this.state.data.types.map(pokemon => {
                            return(
                                <div key={`${this.props.pokemon.name}${pokemon.slot}`}>
                                    <p><strong>{pokemon.type.name}</strong></p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-3">

                    </div>
                </div>
            </div>
        );
    }
}

export default PokemonsCard;