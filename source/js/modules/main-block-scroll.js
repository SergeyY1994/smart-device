const mainBlockButtonElement = document.querySelector('.main-block__button');
const formElement = document.getElementById('form');

function handleButtonScroll() {
  formElement.scrollIntoView({block: 'center', behavior: 'smooth'});
}

if (mainBlockButtonElement && formElement) {
  mainBlockButtonElement.addEventListener('click', handleButtonScroll);
}
