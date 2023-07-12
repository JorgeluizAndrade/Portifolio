// function toggleMobileMenu() {
//   const mobileMenuList = document.querySelector('.header__menu-mobile-list');
//   mobileMenuList.classList.toggle('active');
// }

// function closeMobileMenu() {
//   const mobileMenuList = document.querySelector('.header__menu-mobile-list');
//   mobileMenuList.classList.remove('active');
// }


const navSlide = () => {
  const burger = document.querySelector(".header__menu-mobile");
  const nav = document.querySelector(".header__menu-mobile-list");
  const navLinks = document.querySelectorAll(".header__nav a");

  burger.addEventListener("click", () => {
    nav.classList.toggle("header__nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s `;
      }
    });
  });
};

navSlide();

