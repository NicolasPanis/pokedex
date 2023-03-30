
import './App.css'
import './components/PokemonCard.jsx'
import PokemonCard from './components/PokemonCard.jsx'



const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

PokemonCard.PropTypes = {
    pokemonList: PropTypes.shape ({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string
}),
}

function App () {

  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]}  />
    </div>
  )
}

export default App;
