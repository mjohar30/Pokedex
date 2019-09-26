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
        modalIsOpen: false
    }

    componentDidMount(){
        this.fetchPokemons()
    }

    fetchPokemons = async () => {

        this.setState({ loading: true, error: null });
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=150`)
            const data = await response.json()
            this.setState({ 
                loading: false, 
                data: data
              });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    handleOpenModal = e => {
        this.setState({modalIsOpen: true})
    }

    handleCloseModal = e => {
        this.setState({modalIsOpen: false})
    }

    render() {

        if (this.state.loading === true) {
            return <Loader/>
        }
      
        if (this.state.error) {
          return `Al parecer hubo un error: ${this.state.error.message}`
        }

        return (
            <Fragment>
                <div className="container">
                    <PokemonsList 
                        pokemons={this.state.data.results}
                        onCloseModal={this.handleCloseModal}
                        onOpenModal={this.handleOpenModal}
                        modalIsOpen={this.state.modalIsOpen}
                    />
                    {this.state.loading && <Loader/>}
                </div>

            </Fragment>
        );
    }
}

export default Pokemons;