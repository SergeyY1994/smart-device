const aboutCompanyElement = document.querySelector('.about-company');
let aboutCompanyParagraps = aboutCompanyElement.querySelectorAll('p[data-paragraph-display]');
const aboutCompanyButtonMoreElement = document.querySelector('.about-company__button-more');

if (aboutCompanyElement && aboutCompanyParagraps && aboutCompanyButtonMoreElement) {
  for (let element of aboutCompanyParagraps) {
    element.setAttribute('data-paragraph-display', 'is-close');
    element.style.display = 'none';
  }

  aboutCompanyButtonMoreElement.setAttribute('data-more-status', 'is-close');
  aboutCompanyButtonMoreElement.addEventListener('click', aboutCompanyMoreInformationToggle);
}

function aboutCompanyMoreInformationToggle() {
  let aboutCompanyButtonMoreStatus = document.querySelector('.about-company__button-more').getAttribute('data-more-status');

  if (aboutCompanyButtonMoreStatus === 'is-close') {
    for (let element of aboutCompanyParagraps) {
      element.setAttribute('data-paragraph-display', 'is-open');
      element.style.display = 'block';
    }

    aboutCompanyButtonMoreElement.textContent = 'Свернуть';
    aboutCompanyButtonMoreElement.setAttribute('data-more-status', 'is-open');
  }

  if (aboutCompanyButtonMoreStatus === 'is-open') {
    for (let element of aboutCompanyParagraps) {
      element.setAttribute('data-paragraph-display', 'is-close');
      element.style.display = 'none';
    }

    aboutCompanyButtonMoreElement.textContent = 'Подробнее';
    aboutCompanyButtonMoreElement.setAttribute('data-more-status', 'is-close');
  }
}

// aboutCompanyButtonMoreElement.addEventListener('click', aboutCompanyMoreInformationToggle);
