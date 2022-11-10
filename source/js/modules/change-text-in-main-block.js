const mainBlockButtonElement = document.querySelector('.main-block__button');
const mainBlockButtonText = document.querySelector('.main-block__button-text');
const mainBlockMobileButtonText = document.querySelector('.main-block__mobile-button-text');

if (mainBlockButtonElement && mainBlockButtonText && mainBlockMobileButtonText) {
  if (window.matchMedia('(max-width:767px)').matches) {
    mainBlockButtonText.style.display = 'none';
    mainBlockMobileButtonText.style.display = 'block';
  }
}
