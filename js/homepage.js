let slideIndex = 1;
let slideTimeout;
showSlides(slideIndex);

function currentSlide(n) {
  clearTimeout(slideTimeout);
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "#bbb";
    dots[i].innerHTML = "";
  }

  slides[slideIndex - 1].style.display = "block";

  dots[slideIndex - 1].style.backgroundColor = "#666";
  dots[slideIndex - 1].innerHTML =
    "<span style='display: block; opacity:1; width: 6px; height: 6px; background-color: black; border-radius: 50%; margin: auto;'></span>";

  slideTimeout = setTimeout(() => {
    showSlides((slideIndex += 1));
  }, 10000);
}
