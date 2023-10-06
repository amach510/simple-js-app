let pokemonList = [
    {name:'Bulbasaur',
    height: 0.7,
    types: ['grass','poison']},
    {name:'Charmander',
    height: 0.6,
    types: ['fire']},
    {name:'Squirtle',
    height: 0.5,
    types: ['water']},
    {name:'Caterpie',
    height: 0.3,
    types: ['bug']}
];

//loop
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1)
    {document.write(pokemonList[i].name + "  " + "(height:" + "  " + pokemonList[i].height + ")" + "- Wow. That\'s big!" + "<br>");
} else {
    document.write (pokemonList[i].name + "  " + "(height:" + "  " + pokemonList[i].height + ")" + "<br>");
}
}