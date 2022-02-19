// toggle navbar
const navToggler = document.querySelector(".nav-toggler");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

// toggle menu tab
const menuTab = document.querySelector(".menu__tab");
const tabButtons = document.querySelectorAll(".btn--tab");
const tabContents = document.querySelectorAll(".menu__tab-content");

const sectionHome = document.querySelector(".section-home");
const headerHeight = header.getBoundingClientRect().height;

// click nav link
const navList = document.querySelector(".nav__list");

// click link
const logoLink = document.querySelector(".logo__link");
const scrollButtons = document.querySelectorAll(".btn--scroll");

// modal
const btnShowModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const modal = document.querySelector(".modal");

// page loader
const pageLoader = document.querySelector(".page-loader");

//*******************************

navToggler.addEventListener("click", function toggleNav() {
  navToggler.classList.toggle("active");
  nav.classList.toggle("open");
});

// close nav when clicking on a nav item
document.querySelector(".nav__list").addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target.classList.contains("nav__link")) {
    nav.classList.remove("open");
    navToggler.classList.remove("active");
  }
});

// sticky header
const obsCallback = function (entries, observer) {
  const [entry] = entries; // get first element and named it as 'entry'
  // console.log(entry);
  entry.isIntersecting
    ? header.classList.remove("sticky")
    : header.classList.add("sticky");
};

const obsOptions = {
  root: null, // viewport (the element that the target is intersecting)
  threshold: 0, // contain 0 percent of target to trigger callback (edge)
  rootMargin: `${-headerHeight}px`, // a box of 90px that will be applied outside(- => inside) of target element
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(sectionHome); // section => the target

// toggle menu tab
menuTab.addEventListener("click", (e) => {
  const clickedButton = e.target;

  if (!clickedButton.classList.contains("btn--tab")) return;

  tabButtons.forEach((btn) => btn.classList.remove("active"));
  tabContents.forEach((content) => content.classList.remove("active"));

  clickedButton.classList.add("active");
  document.querySelector(clickedButton.dataset.target).classList.add("active");
});

// click nav link
navList.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.classList.contains("nav__link")) return;

  const id = e.target.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

scrollButtons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  })
);

logoLink.addEventListener("click", (e) => {
  e.preventDefault();
  const id = e.target.closest(".logo__link").getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

// show/close modal
btnShowModal.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });
});

btnCloseModal.addEventListener("click", (e) => {
  e.stopPropagation();
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (!e.target.classList.contains("modal")) return;

  modal.classList.add("hidden");
});

document.addEventListener("keyup", (e) => {
  if (e.key !== "Escape") return;

  modal.classList.add("hidden");
});

// page loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded!");
});

window.addEventListener("load", () => {
  console.log("full page loaded!");
  pageLoader.classList.add("hidden");

  // reveal items
  ScrollReveal().reveal(".reveal", {
    interval: 100,
    delay: 50,
    duration: 1000,
    distance: "15px",
  });
});
