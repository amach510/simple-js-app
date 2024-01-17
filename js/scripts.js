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
  // boostrap class
  button.classList.add('btn');
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
  let modalContainer = document.querySelector('#modal-container');

  //Clear all existing modal content
  modalContainer.innerHTML = '';

  let modal = document.createElement('div');
  modal.classList.add('modal');

  //Add the new modal content
  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);

  modal.appendChild(closeButtonElement);

  let titleElement = document.createElement('h1');
  titleElement.innerText = pokemon.name;

  let heightElement = document.createElement('p');
  heightElement.innerText = 'height: ' + pokemon.height;

  let imgElement = document.createElement('img');
  imgElement.src = pokemon.imageUrl;

  modalContainer.appendChild(modal);
  modal.appendChild(titleElement);
  modal.appendChild(heightElement);
  modal.appendChild(imgElement);
  modalContainer.classList.add('is-visible');

  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });
}

//Hide modal function
function hideModal() {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible');
}

//Esc key close
window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();  
  }
});

return {
  getAll: getAll,
  add: add,
  addListItem: addListItem,
  showDetails: showDetails,
  loadList: loadList,
  loadDetails: loadDetails,
  showModal: showModal,
  hideModal: hideModal
};
})();

pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});