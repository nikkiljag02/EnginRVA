// If needed, add interactivity here.
// Example: Smooth scroll to About Us section

document.querySelectorAll('a[href^="#about-us"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

