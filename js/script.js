// Rolagem suave
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação de Revelação ao Rolar
let isScrolling;
window.addEventListener('scroll', () => {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        revealElements();
    }, 100); // Executa após 100ms
});

function revealElements(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Para de observar após a primeira revelação
        }
    });
}

const observer = new IntersectionObserver(revealElements, {
    threshold: 0.1, // Revela quando 10% do elemento está visível
});

document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});

document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});
