const mainHeaderModalButtonElement = document.querySelector('.main-header__modal-button');
const modalTextInputElement = document.querySelector('input[name=modal-user-name]');

if (mainHeaderModalButtonElement && modalTextInputElement) {
  mainHeaderModalButtonElement.addEventListener('click', () => {
    setTimeout(() => modalTextInputElement.focus(), 500);
  });
}
