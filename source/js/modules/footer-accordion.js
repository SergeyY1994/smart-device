const siteSectionListElement = document.querySelector('.site-sections__list');
const siteSectionsToggleElement = document.querySelector('.site-sections__toggle');
const contactsListElement = document.querySelector('.contacts__list');
const contactsToggleElement = document.querySelector('.contacts__toggle');

if (window.matchMedia('(max-width: 768px)').matches) {
  siteSectionListElement.style.display = 'none';
  contactsListElement.style.display = 'none';
  siteSectionsToggleElement.style.backgroundImage = 'url("/img/svg/plus.svg")';
  contactsToggleElement.style.backgroundImage = 'url("/img/svg/plus.svg")';
}

function siteSectionsListToggle() {
  const siteSectionsListStatus = siteSectionsToggleElement.getAttribute('data-list-status');

  if (siteSectionsListStatus === 'closed') {
    siteSectionListElement.style.display = 'block';
    siteSectionsToggleElement.style.backgroundImage = 'url("/img/svg/minus.svg")';
    siteSectionsToggleElement.setAttribute('data-list-status', 'opened');

    contactsListElement.style.display = 'none';
    contactsToggleElement.style.backgroundImage = 'url("/img/svg/plus.svg")';
    contactsToggleElement.setAttribute('data-list-status', 'closed');
  } else if (siteSectionsListStatus === 'opened') {
    siteSectionListElement.style.display = 'none';
    siteSectionsToggleElement.style.backgroundImage = 'url("/img/svg/plus.svg")';
    siteSectionsToggleElement.setAttribute('data-list-status', 'closed');
  }
}

function contactsListToggle() {
  const contactsListStatus = contactsToggleElement.getAttribute('data-list-status');

  if (contactsListStatus === 'closed') {
    contactsListElement.style.display = 'block';
    contactsToggleElement.style.backgroundImage = 'url("/img/svg/minus.svg")';
    contactsToggleElement.setAttribute('data-list-status', 'opened');

    siteSectionListElement.style.display = 'none';
    siteSectionsToggleElement.style.backgroundImage = 'url("/img/svg/plus.svg")';
    siteSectionsToggleElement.setAttribute('data-list-status', 'closed');
  } else if (contactsListStatus === 'opened') {
    contactsListElement.style.display = 'none';
    contactsToggleElement.style.backgroundImage = 'url("/img/svg/plus.svg")';
    contactsToggleElement.setAttribute('data-list-status', 'closed');
  }
}

siteSectionsToggleElement.addEventListener('click', siteSectionsListToggle);
contactsToggleElement.addEventListener('click', contactsListToggle);

