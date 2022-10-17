import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon1, setPokemon1] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
    id: 0
  })
  const [pokemon2, setPokemon2] = useState({
    name: "Abra",
    type: "Psychic",
    evolved: false,
    weight: 19.5,
    color: 'brown',
    image: 'https://archives.bulbagarden.net/media/upload/7/7f/063Abra_OS_anime.png',
    id: 0
  })
  const [pokemon3, setPokemon3] = useState({
    name: "Chikorita",
    type: "Grass",
    evolved: false,
    weight: 6.4,
    color: 'green',
    image: 'https://archives.bulbagarden.net/media/upload/5/51/152Chikorita_OS_anime_1.png',
    id: 0
  })
  const PokemonEvolucao1 = () => {
    const evolucao = {
      ... pokemon1,
      name: "Pikachu",
      evolved: true,
      weight: 6,
      image: 'https://archives.bulbagarden.net/media/upload/f/f8/025Pikachu_Conquest.png'
    }
    setPokemon1(evolucao)
  }
  const PokemonEvolucao2 = () => {
    const evolucao = {
      ... pokemon2,
      name: "Kadabra",
      evolved: true,
      weight: 56.5,
      image: 'https://archives.bulbagarden.net/media/upload/4/42/064Kadabra_OS_anime.png'
    }
    setPokemon2(evolucao)
  }
  const PokemonEvolucao3 = () => {
    const evolucao = {
      ... pokemon3,
      name: "Bayleef",
      evolved: true,
      weight: 15.8,
      image: 'https://archives.bulbagarden.net/media/upload/1/17/153Bayleef_GS.png'
    }
    setPokemon3(evolucao)
  }
  return ( <>
  <GlobalStyles/>
    <FlexContainer>

      <PokemonCard 
      nome={pokemon1.name} 
      cor={pokemon1.color} 
      imagem={pokemon1.image} 
      peso={pokemon1.weight} 
      type={pokemon1.type} 
      pokemonEvolucao={PokemonEvolucao1}
      />

      <PokemonCard 
      nome={pokemon2.name} 
      cor={pokemon2.color} 
      imagem={pokemon2.image} 
      peso={pokemon2.weight} 
      type={pokemon2.type} 
      pokemonEvolucao={PokemonEvolucao2}
      />

      <PokemonCard 
      nome={pokemon3.name} 
      cor={pokemon3.color} 
      imagem={pokemon3.image} 
      peso={pokemon3.weight} 
      type={pokemon3.type} 
      pokemonEvolucao={PokemonEvolucao3}
      />
      
    </FlexContainer>
  </>
    
  );
}

export default App;
