const mainBlockButtonElement = document.querySelector('.main-block__button');
const formElement = document.getElementById('form');

if (mainBlockButtonElement && formElement) {
  mainBlockButtonElement.removeAttribute('href');
  mainBlockButtonElement.addEventListener('click', handleButtonScroll);
}

function handleButtonScroll() {
  formElement.scrollIntoView({block: 'center', behavior: 'smooth'});
}
