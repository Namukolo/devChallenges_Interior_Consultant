const navSlideIn = () => {
  const menu = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".nav-links");

  menu.addEventListener("click", () => {
    mobileNav.classList.toggle("nav-active");
    menu.classList.toggle("hamburger-active");
  });
};

navSlideIn();
