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


let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
  document.body.classList.toggle('active');
};

window.onscroll = () =>{
  if(window.innerWidth < 1200){
    menu.classList.remove('fa-times');
    header.classList.remove('active');
    document.body.classList.remove('active');
  };
};

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
