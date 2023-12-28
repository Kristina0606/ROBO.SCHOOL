import './modal-window.scss'

const modal = document.querySelector('dialog')
const modalBox = document.getElementById('modal-box')
const showModalBtn = document.getElementById('show-modal-btn')
const closeModalBtn = document.getElementById('close-modal-btn')


let isModalOpen = false

showModalBtn.addEventListener('click', (e) => {
  modal.showModal()
  isModalOpen = true
  e.stopPropagation()
})

closeModalBtn.addEventListener('click', () => {
  modal.close()
  isModalOpen = false
})

document.addEventListener('click', (e) => {
  if (isModalOpen && !modalBox.contains(e.target)) {
    modal.close()
  }
})

window.showInfo = function (infoId) {
  // Скрываем все контейнеры с информацией
  const infoContainers = document.querySelectorAll(".info-modal-container");
  infoContainers.forEach(function (container) {
    container.classList.remove("active");
  });

  // Показываем нужный контейнер
  const selectedInfo = document.getElementById(infoId);
  selectedInfo.classList.add("active");
}

window.highlightButton = function (button) {
  button.style.color = '#D52027';
}

window.unhighlightButton = function (button) {
  button.style.color = '';
}