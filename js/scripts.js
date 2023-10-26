//IIFE
let pokemonRepository = (function() {
    let pokemonList = [];

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
        button.addEventListener('click', function(){
            showDetails(pokemon.name);
        });
    }
    
    function showDetails(pokemon){
        console.log(pokemon);
    }

    function add(pokemon) {
        if(typeof pokemon === 'object') {
            pokemonList.push(pokemon);
        }
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails: showDetails
    };
})();

pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
});