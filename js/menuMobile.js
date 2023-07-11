function toggleMobileMenu() {
    const mobileMenuList = document.querySelector('.header__menu-mobile-list');
    mobileMenuList.classList.toggle('active');
  }
  
  function closeMobileMenu() {
    const mobileMenuList = document.querySelector('.header__menu-mobile-list');
    mobileMenuList.classList.remove('active');
  }
  