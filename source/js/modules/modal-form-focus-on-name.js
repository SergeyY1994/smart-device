const mainHeaderModalButtonElement = document.querySelector('.main-header__modal-button');

if (mainHeaderModalButtonElement) {
  mainHeaderModalButtonElement.addEventListener('click', () => {
    setTimeout(() => document.querySelector('input[name=modal-user-name]').focus(), 500);
  });
}
