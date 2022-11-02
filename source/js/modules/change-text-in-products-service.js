const productsServiceTitleElement = document.querySelector('.products-service__title');

if (productsServiceTitleElement) {
  if (window.matchMedia('(max-width:767px)').matches) {
    productsServiceTitleElement.textContent = 'Товары и услуги Smart Device';
  }
}
