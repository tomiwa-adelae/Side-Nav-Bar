// SELECTORS
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// EVENTS
burger.addEventListener('click', burgerClicked);

// FUNCTIONS
function burgerClicked(e){
   e.preventDefault();
   navLinks.classList.toggle('show-links');
}
