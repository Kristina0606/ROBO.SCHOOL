import './fourth-page.scss'

const slider = document.getElementById('slider-container');
const slides1 = document.getElementById('slides-1');
const slides2 = document.getElementById('slides-2');
const slideWidth = document.querySelector('.card-slider').offsetWidth;
let currentIndex = 0;

window.nextSlide = function () {
  if (currentIndex < 2) {
    document.querySelectorAll('.card-slider').forEach(card => {
      card.classList.remove('hidden');
    });
    currentIndex += 2;
    slides1.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    slides2.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    document.querySelectorAll('#slides-1 .card-slider').forEach(card => {
      card.classList.add('hidden');
    });
  }
  ;

  window.prevSlide = function () {
    if (currentIndex > 0) {
      currentIndex -= 2;
      slides1.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      slides2.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
    // Скрываем две последние карточки при возврате к первым трём
    document.querySelectorAll('#slides-2 .card-slider').forEach(card => {
      card.classList.add('hidden');
    });
    // Показываем первые три карточки
    document.querySelectorAll('#slides-1 .card-slider').forEach(card => {
      card.classList.remove('hidden');
    });
  };
}