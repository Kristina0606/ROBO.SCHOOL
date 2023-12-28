import './app-header.scss'

window.actionWithBurgerMenu = function () {
  const burgerMenu = document.getElementById('burger-menu');
  const overlay = document.getElementById('burger-content');
  burgerMenu.addEventListener('click',function(){
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
  });
}