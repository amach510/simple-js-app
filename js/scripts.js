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

    function add(pokemon) {
        if(typeof pokemon === 'object') {
            pokemonList.push(pokemon);
        }
    }

    return {
        getAll: getAll,
        add: add
    };
})();

//Retrieve pokemonList array from IIFE
let pokemonList = pokemonRepository.getAll();

//let pokemonList = [
   // {name:'Bulbasaur',
   // height: 0.7,
   // types: ['grass','poison']},
   // {name:'Charmander',
   // height: 0.6,
   // types: ['fire']},
   // {name:'Squirtle',
   // height: 0.5,
   // types: ['water']},
   // {name:'Caterpie',
   // height: 0.3,
   // types: ['bug']},
   // {name:'Ninetales',
   // height: 1.1,
   // types: ['fire']}
//];

//forEach loop
pokemonList.forEach(function(pokemon){
    if(pokemon.height>1.0){
        document.write(pokemon.name + "(height: " + pokemon.height + "m) - Wow, that\'s big! <br>");
    }else{
        document.write(pokemon.name + " " + "(height: " + pokemon.height + "m) <br>");
    }
});

//commented out for loop
    //for (let i = 0; i < pokemonList.length; i++) {
    //    if (pokemonList[i].height > 1)
    //        {document.write(pokemonList[i].name + "  " + "(height:" + "  " + pokemonList[i].height + "m)" + " - Wow. That\'s big!" + "<br>"); //condition for pokemon with height > 1
    //    } else {
    //    document.write (pokemonList[i].name + "  " + "(height:" + "  " + pokemonList[i].height + "m)" + "<br>");}
    //}