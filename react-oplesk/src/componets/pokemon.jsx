import { useState , useEffect } from "react"




export function Pokemon(){  

    const [pokemonData, setPokemonData] = useState(1)

    // Obteniendo datos de la Url pokeAPI

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/charizard`)
       .then(response => response.json())
       .then(data => setPokemonData(data))
       .catch(error => console.log(error))
    }, [])

    
    
    return(
     <>
      <h2>
        {pokemonData.name}
      </h2>
      <p>
        Tipo : {pokemonData.types[0].type.name} 
      </p>
      <p>
        Habilidades : {pokemonData.abilities.map( value => value.ability.name).join(', ')}
      </p>
     </>
    )
}