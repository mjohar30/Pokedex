import React, { Component, Fragment } from 'react';

import PokemonsList from '../components/PokemonsList'
import Loader from '../components/Loader'

class Pokemons extends Component {

    state = {
        loading: true,
        error: null,
        data: {
            results: []
        },
    }

    componentDidMount(){
        this.fetchPokemons()
    }

    fetchPokemons = async () => {

        this.setState({ loading: true, error: null });

        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
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
      
        if (this.state.error) {
          return `Al parecer hubo un error: ${this.state.error.message}`;
        }

        return (
            <Fragment>
                <div className="container">
                    <PokemonsList pokemons={this.state.data.results}/>
                    {this.state.loading && <Loader/>}
                    <div className="row">
                        <div className="col-12 text-center mt-4">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-secondary">Anterior</button>
                                <button type="button" className="btn btn-secondary">Siguiente</button>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Pokemons;