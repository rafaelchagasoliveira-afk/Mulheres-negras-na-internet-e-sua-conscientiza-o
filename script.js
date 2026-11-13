// Interações leves: navegação suave e destaque do link da seção atual.

const links = document.querySelectorAll('nav a');

const sections = [...links]
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window) {

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        links.forEach(link => {

          link.classList.toggle(
            'ativo',
            link.getAttribute('href') === `#${entry.target.id}`
          );

        });

      }

    });

  }, {
    rootMargin: '-35% 0px -55% 0px'
  });

  sections.forEach(section => observer.observe(section));

}
