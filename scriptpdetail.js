const images = [
    'images/airpodspro1.png',
    'images/airpodspro2.png',
    'images/airpodspro3.png',
    'images/airpodspro4.png',
    'images/airpodspro5.png',
    'images/airpodspro6.png'
];

let currentIndex = 0;

const mainImage = document.getElementById('mainImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const thumbnails = document.querySelectorAll('.thumbnail-images .thumbnail');

function updateImage(index){
    mainImage.src = images[index];;
    thumbnails.forEach((thumbnail, i) => {
        thumbnail.classList.toggle('active', i ===index);
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length -1 : currentIndex -1;
    updateImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length -1) ? 0 : currentIndex +1;
    updateImage(currentIndex);
});

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function() {
        currentIndex = index;
        updateImage(currentIndex);
    });
});

updateImage(currentIndex);

mainImage.addEventListener('click', function() {
    mainImage.classList.toggle('zoomed');
});