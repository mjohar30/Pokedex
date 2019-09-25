import React, { Component, Fragment } from 'react';

import PokemonsList from '../components/PokemonsList'

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
          const response = await fetch('https://pokeapi.co/api/v2/pokemon')
          const data = await response.json()
          console.log(data)
          this.setState({ loading: false, data: data });
        } catch (error) {
          this.setState({ loading: false, error: error });
        }
    }

    render() {

        if (this.state.loading === true) {
            return 'Loading...';
        }
      
        if (this.state.error) {
          return `Error: ${this.state.error.message}`;
        }

        return (
            <Fragment>
                
                <div className="container">
                    <PokemonsList pokemons={this.state.data.results}/>
                </div>

            </Fragment>
        );
    }
}

export default Pokemons;