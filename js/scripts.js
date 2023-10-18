//IIFE
let pokemonRepository = (function() {
    let pokemonList = [
        {name:'Bulbasaur', height: 0.7, types: ['grass','poison']},
        {name:'Charmander', height: 0.6, types: ['fire']},
        {name:'Squirtle', height: 0.5, types: ['water']},
        {name:'Caterpie', height: 0.3, types: ['bug']},
        {name:'Ninetales', height: 1.1, types: ['fire']}
    ];

    function getAll() {
        return pokemonList;
    }
    function addListItem(pokemon){     
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
    }

    function add(pokemon) {
        if(typeof pokemon === 'object') {
            pokemonList.push(pokemon);
        }
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem
    };
})();

//Retrieve pokemonList array from IIFE
let pokemonList = pokemonRepository.getAll();


//forEach loop
// pokemonList.forEach(function(pokemon){
//     if(pokemon.height>1.0){
//         document.write(pokemon.name + "(height: " + pokemon.height + "m) - Wow, that\'s big! <br>");
//     }else{
//         document.write(pokemon.name + " " + "(height: " + pokemon.height + "m) <br>");
//     }
// });

pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
});