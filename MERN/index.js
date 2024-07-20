const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#ccc';
  });

  link.addEventListener('mouseout', () => {
    link.style.color = 'black';
  });
});
