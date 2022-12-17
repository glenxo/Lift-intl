let my_element = document.createElement('h1');
let my_span = document.createElement('span');
let my_div = document.createElement('div');
let message;
message = 'Pagina en mantenimiento no publica';
let button;
let box;


alert(message);

my_element.appendChild(my_span);

my_element.appendChild(my_div);

my_element.classList.add('custom_class');

document.body.appendChild(my_element);  


(function(){

    var parallax = document.querySelectorAll(".banner"),
        speed = 0.5;
  
    window.onscroll = function(){
      [].slice.call(parallax).forEach(function(el,i){
  
        var windowYOffset = window.pageYOffset,
            elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
  
        el.style.backgroundPosition = elBackgrounPos;
  
      });
    };
  
  })();

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

