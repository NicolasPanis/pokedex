const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard(props) {
 
  
  return <figure>
    {props.pokemon.imgSrc ? (<img src={props.pokemon.imgSrc} alt={props.pokemon.name}/>) : (<p>???</p>)}
      <figcaption>{props.pokemon.name}</figcaption>
    </figure>
  
}

export default PokemonCard;

