const form = document.querySelector('form');

//? Local Storage
function storeList() {
  window.localStorage.todoList = list.innerHTML;
}

//? Récupération de la liste
function getTodos() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;

  } else {
    list.innerHTML = `
    <li>Cliquer sur un todo pour le supprimer</li>
    `;

  }
}

window.addEventListener('load', getTodos);

//? Ajout d'un item dans la liste
form.addEventListener('submit', (e) => {
  e.preventDefault();

  list.innerHTML += `<li>${item.value}</li>`;
  item.value = '';
  storeList();
});

//? Suppression d'un item dans la liste
list.addEventListener('click', (e) => {


  if (e.target.classList.contains('checked')) {
    e.target.remove();
  } else {
    e.target.classList.add('checked');
  }

  storeList();
});