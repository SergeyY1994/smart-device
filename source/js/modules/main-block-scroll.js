const mainBlockButtonElement = document.querySelector('.main-block__button');
const formElement = document.getElementById('form');

function handleButtonScroll() {
  if (mainBlockButtonElement && formElement) {
    formElement.scrollIntoView({block: 'center', behavior: 'smooth'});
  }
}

mainBlockButtonElement.addEventListener('click', handleButtonScroll);
