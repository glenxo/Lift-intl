

menu.onclick = () =>{
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');

searchIcon.onclick = () =>{
  searchIcon.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
}

window.onscroll = () =>{
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}

