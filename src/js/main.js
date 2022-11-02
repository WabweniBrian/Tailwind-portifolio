// FUNCTION:: Get elements by id
const _ = (elm) => document.getElementById(elm);
// FUNCTION:: Get elements by queryselector
const qs = (elm) => document.querySelector(elm);
// FUNCTION:: Get elements by queryselectorAll
const qsa = (elm) => document.querySelectorAll(elm);

// Get all DOM elements
const [
  navMenu,
  navMenutabBtn,
  sunIcon,
  moonIcon,
  rootDocument,
  tabPanels,
  tabBtns,
  backToTopBtn,
] = [
  qs(".mobile-menu "),
  qs(".toggle"),
  qs(".feather-sun"),
  qs(".feather-moon"),
  qs(":root"),
  qsa(".skill-panel"),
  qsa(".tab-btn"),
  qs(".back-to-top-btn"),
];

navMenutabBtn.addEventListener("click", () => {
  navMenu.classList.toggle("showMenu");
});

sunIcon.addEventListener("click", (e) => {
  rootDocument.classList.remove("dark");
  sunIcon.classList.add("active");
  moonIcon.classList.remove("active");
});

moonIcon.addEventListener("click", () => {
  rootDocument.classList.add("dark");
  sunIcon.classList.remove("active");
  moonIcon.classList.add("active");
});

window.addEventListener("scroll", () => {
  qs("nav").classList.toggle("scroll", window.scrollY > 0);
  backToTopBtn.classList.toggle("showBackTopBtn", window.scrollY > 500);
});

backToTopBtn.addEventListener("click", () => window.scrollTo(0, 0));

// FUNCTION: REMOVE ACTIVE CLASS FROM TAB BUTTONS AND tabPanels

// ---------------------------------------------------------TABS COMPONENT-----------------------------------------------------------------------------------------
function removeActiveClass(element) {
  element.forEach((elm) => {
    elm.classList.remove("show");
    elm.classList.remove("fade-in");
  });
}

tabBtns.forEach((tabBtn, i) => {
  tabBtn.addEventListener("click", (e) => {
    removeActiveClass(tabBtns);
    removeActiveClass(tabPanels);
    tabBtn.classList.add("show");
    let tabBtnId = tabBtn.attributes.id.value;
    const panel = qs(`.skill-panel[data-id = ${tabBtnId}]`);
    panel.classList.add("show");
    panel.classList.add("fade-in");
  });
});

//Add the active class to the first elements
tabBtns[0].classList.add("show");
tabPanels[0].classList.add("show");

// FUNCTION: REMOVE ACTIVE CLASS FROM TAB BUTTONS AND tabPanels
function removeActiveClass(element) {
  element.forEach((elm) => {
    elm.classList.remove("show");
    elm.classList.remove("fade-in");
  });
}
