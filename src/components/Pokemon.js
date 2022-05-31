import React from 'react'
//object DESTRUCTURING
export default function Pokemon({pokemon}) {
    if (pokemon) {
        console.log("pokemon", pokemon);
        const {abilities, stats} = pokemon;
        return (
            //display pokemon data, reusable component
            pokemon.name && <div>
                <img src={pokemon.sprites?.front_default}/>
                <h1>{pokemon.name}</h1>
                <div>
                    <h4>Abilities</h4>
                    {abilities?.map(({ability}, i) => 
                    <p key={i}>{ability.name}</p>)}
                </div>
                <div>
                    <h4>Stats</h4>
                    {stats?.map((stat, i) => 
                    <p key={i}>{stat.stat.name}: {stat.base_stat}</p>)}
                </div>
            </div>
        )
    }
    else {
        return (
            <div><h1>No Pokemon Found</h1></div>
        )
    }
}
