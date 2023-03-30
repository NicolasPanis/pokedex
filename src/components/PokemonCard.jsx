function PokemonCard(pokemon) {
 
  
  return <figure>
    {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name}/>) : (<p>???</p>)}
      <figcaption>{props.pokemon.name}</figcaption>
    </figure>
  
}

export default PokemonCard;

