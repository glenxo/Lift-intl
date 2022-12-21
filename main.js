let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
  console.log('Menu clicked');
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
  document.body.classList.toggle('active');
};

header.addEventListener('click', event => {
  if (event.target.matches('a, tag, anchor')) {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
    document.body.classList.remove('active');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 1200) {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
    document.body.classList.remove('active');
  }
});



(function(){
  var parallax = document.querySelectorAll(".contact"),
      speed = 0.3;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){
      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
      el.style.backgroundPosition = elBackgrounPos;
    });
  };
})();