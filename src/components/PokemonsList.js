import React from 'react';

import PokemonsCard from './PokemonsCard'

function useSearchPokemons(pokemons){
    const [query, setQuery] = React.useState('')
    const [filteredPokemons, setFilteredPokemons] = React.useState(pokemons)
  
    React.useMemo(() => {
      const result = pokemons.filter(pokemon => {
        return `${pokemon.name}`
        .toLowerCase()
        .includes(query.toLowerCase())
      })
      setFilteredPokemons(result)
    }, [pokemons, query])
  
    return {query, setQuery, filteredPokemons}
  }

function PokemonsList(props){

    const pokemons = props.pokemons
    
    const {query, setQuery, filteredPokemons} = useSearchPokemons(pokemons)

    if (filteredPokemons.length === 0) {
        return (
          <div>
            <h3 className="text-white">Lista de pokemones</h3>
            <div>
                <div className="form-group">
                  <label className="text-white">Encuentra el pokemon que estás buscando</label>
                  <input 
                    type="text"
                    className="form-control"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value)
                    }}
                    />
                </div>
            </div>
            <div className="container">
                <h3>No pokemons were found</h3>
            </div>
          </div>
        );
    }
        
    return (
        <div className="text-center">
            <h3 className="text-white">Lista de pokemones</h3>
            <div>
                <div className="form-group">
                  <label className="text-white">Encuentra el pokemon que estás buscando</label>
                  <input 
                    type="text"
                    className="form-control"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value)
                    }}
                    />
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
                {filteredPokemons.map(pokemon => {
                    return(
                        <PokemonsCard key={pokemon.name} pokemon={pokemon}/>
                    )
                })}
            </div>
        </div>
    );  
}

export default PokemonsList;