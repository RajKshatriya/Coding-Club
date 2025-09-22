document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNav');

  mobileMenuToggle.addEventListener('click', function() {
    mobileMenuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });
});