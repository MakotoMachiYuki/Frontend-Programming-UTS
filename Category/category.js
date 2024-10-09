const slides = document.querySelectorAll('.slide');
        
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}
function prevSlide() {
    showSlide(currentSlide - 1);
}

setInterval(nextSlide, 3500);

document.querySelector('prev').addEventListener('click', prevSlide)
document.querySelector('next').addEventListener('click', nextSlide)

        