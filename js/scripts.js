//IIFE
let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

// Other functions

function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
}

function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    // Now we add the details to the item
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });
}

function getAll() {
  return pokemonList;
}

function addListItem(pokemon){     
  let pokemonList = document.querySelector(".list-group-item");
  let listpokemon = document.createElement("li");
  // bootstrap class
  listpokemon.classList.add ('list-group-item');
  // button for li
  let button = document.createElement("button");
  // bootstrap class
  button.classList.add('btn');
  // bootstrap attribute
  button.setAttribute('data-toggle', 'modal');
  // bootstrap attribute
  button.setAttribute('data-target', '#modal');
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
  button.addEventListener('click', function(event){
      showDetails(pokemon);
  });
}

function showDetails(pokemon) {
  pokemonRepository.loadDetails(pokemon).then(function () {
    showModal(pokemon);
  });
}

function add(pokemon) {
  if(typeof pokemon === 'object') {
      pokemonList.push(pokemon);
  }
}

  // Create modal
function showModal(pokemon) {
  let modalBody = document.querySelector('.modal-body');
  let modalTitle = document.querySelector('.modal-title');

  //Clear all existing modal content
  modalTitle.innerHTML = '';
  modalBody.innerHTML = '';

  //Creating element for name in modal content
  let nameElement = document.createElement('h1');
  nameElement.innerText = pokemon.name;
  
  //Creating img in modal content
  let imageElement = document.createElement('img');
  imageElement.classList.add('modal-img');
  imageElement.setAttribute('src', pokemon.imageUrl);
  
  //Creating element for height in modal content
  let heightElement = document.createElement('p');
  heightElement.innerText = 'height: ' + pokemon.height;

  //Add the new modal content
  modalTitle.appendChild(nameElement);
  modalBody.appendChild(imageElement);
  modalBody.appendChild(heightElement);
}

return {
  getAll: getAll,
  add: add,
  addListItem: addListItem,
  showDetails: showDetails,
  loadList: loadList,
  loadDetails: loadDetails,
  showModal: showModal
};
})();

pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});