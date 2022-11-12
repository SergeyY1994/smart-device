const mainBlockButtonElement = document.querySelector('.main-block__button');
const formElement = document.getElementById('form');

if (mainBlockButtonElement && formElement) {
  mainBlockButtonElement.addEventListener('click', handleButtonScroll);
}

function handleButtonScroll(evt) {
  evt.preventDefault();
  formElement.scrollIntoView({block: 'center', behavior: 'smooth'});
}
