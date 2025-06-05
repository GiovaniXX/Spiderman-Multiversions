function handleMouseEnter() {
  this.classList.add('s-card--hovered');
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove('s-card--hovered');
  document.body.id = '';
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card');
  for (let card of cardElements) {
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.s-cards-carousel');
  if (!carousel) return;

  // Calcula o novo ângulo de rotação
  const rotateYDeg = -120 * (Number(selectedItem) - 1);
  carousel.style.transform = `rotateY(${rotateYDeg}deg)`;

  // Atualiza o botão ativo
  const activeButtonElement = document.querySelector('.s-controller__button--active');
  if (activeButtonElement) {
    activeButtonElement.classList.remove('s-controller__button--active');
  }
  selectedButtonElement.classList.add('s-controller__button--active');
}