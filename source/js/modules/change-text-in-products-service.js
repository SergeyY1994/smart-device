const productsServiceTitleElement = document.querySelector('.products-service__title');
const productsServiceTitleText = document.querySelector('.products-service__title-text');
const productsServiceMobileTitleText = document.querySelector('.products-service__mobile-title-text');

if (productsServiceTitleElement && productsServiceTitleText && productsServiceMobileTitleText) {
  if (window.matchMedia('(max-width:767px)').matches) {
    productsServiceTitleText.style.display = 'none';
    productsServiceMobileTitleText.style.display = 'block';
  }
}
