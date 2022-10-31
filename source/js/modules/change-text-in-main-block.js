const mainBlockButtonElement = document.querySelector('.main-block__button');

if (mainBlockButtonElement) {
  if (window.matchMedia('(max-width:767px)').matches) {
    mainBlockButtonElement.textContent = 'Бесплатная консультация';
  }
}
