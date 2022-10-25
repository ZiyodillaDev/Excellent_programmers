const elHamburgerBtn = document.querySelector(".toggle");
const header = document.querySelector(".header");

elHamburgerBtn.addEventListener('click', ()=> {
  header.classList.toggle('header--open');
})

let el = document.querySelector(".el");