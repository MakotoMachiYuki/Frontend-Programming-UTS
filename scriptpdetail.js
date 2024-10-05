document.addEventListener('DOMContentLoaded', () => {
    initProductSlider(1, [
    'images/produk/airpodspro1.png',
    'images/produk/airpodspro2.png',
    'images/produk/airpodspro3.png',
    'images/produk/airpodspro4.png',
    'images/produk/airpodspro5.png',
    'images/produk/airpodspro6.png'
    ]);

    const  blackImages3 = [
    'images/produk/spaceone1.png',
    'images/produk/spaceone2.png',
    'images/produk/spaceone3.png',
    'images/produk/spaceone4.png',
    'images/produk/spaceone5.png',
    'images/produk/spaceone6.png'
    ];

    const  creamImages3 = [
    'images/produk/spaceonecream1.png',
    'images/produk/spaceonecream2.png',
    'images/produk/spaceonecream3.png',
    'images/produk/spaceonecream4.png',
    'images/produk/spaceonecream5.png',
    'images/produk/spaceonecream6.png'
    ];

    const  blueImages3 = [
    'images/produk/spaceoneblue1.png',
    'images/produk/spaceoneblue2.png',
    'images/produk/spaceoneblue3.png',
    'images/produk/spaceoneblue4.png',
    'images/produk/spaceoneblue5.png',
    'images/produk/spaceoneblue6.png'
    ];


    const blackImages4 = [
    'images/produk/nothingear1.png',
    'images/produk/nothingear2.png',
    'images/produk/nothingear3.png'
    ];

    const whiteImages4 = [
    'images/produk/nothingearwhite1.png',
    'images/produk/nothingearwhite2.png',
    'images/produk/nothingearwhite3.png'
    ];

    const blackImages = [
    'images/produk/sonyblack1.png',
    'images/produk/sonyblack2.png',
    'images/produk/sonyblack3.png',
    'images/produk/sonyblack4.png',
    'images/produk/sonyblack5.png',
    ];

    const silverImages = [
    'images/produk/sonysilver1.png',
    'images/produk/sonysilver2.png',
    'images/produk/sonysilver3.png',
    'images/produk/sonysilver4.png',
    'images/produk/sonysilver5.png',
    ];

    initProductSlider(2, blackImages);
    initProductSlider(3, blackImages3);
    initProductSlider(4, blackImages4);
    
    const colorElements = document.querySelectorAll( '.colors .color');
    colorElements.forEach(colorElement => {
        colorElement.addEventListener('click', function() {
            const selectedColor = this.getAttribute('color');
            if (selectedColor === 'black') {
                initProductSlider(2, blackImages);
            }else if (selectedColor === 'silver') {
                initProductSlider(2, silverImages);
            }

            if (selectedColor === 'et black') {
                initProductSlider(3, blackImages3);
            }else if (selectedColor === 'latte cream') {
                initProductSlider(3, creamImages3);
            }else if (selectedColor === 'sky blue') {
                initProductSlider(3, blueImages3);
            }

            if (selectedColor === 'black') {
                initProductSlider(4, blackImages4);
            }else if (selectedColor === 'white') {
                initProductSlider(4, whiteImages4);
            }
        });
    });
});

function initProductSlider(productId, images) {
    let currentIndex = 0;

    const mainImage = document.getElementById(`mainImage${productId}`);
    const prevBtn = document.getElementById(`prevBtn${productId}`);
    const nextBtn = document.getElementById(`nextBtn${productId}`);
    const thumbnailsContainer = document.querySelector(`#product${productId} .thumbnail-images`);

    if (!mainImage || !thumbnailsContainer) {
        return;
    }

    thumbnailsContainer.innerHTML = '';
    images.forEach((imageSrc, index) =>{
        const thumbnail = document.createElement('img');
        thumbnail.src = imageSrc;
        thumbnail.classList.add('product-img', 'thumbnail');
        thumbnail.setAttribute('data-index', index);

        thumbnailsContainer.appendChild(thumbnail);

        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            updateImage(currentIndex);
        });
    });

    const thumbnails = thumbnailsContainer.querySelectorAll('.thumbnail');

    function updateImage(index){
        mainImage.src = images[index];

        thumbnails.forEach((thumbnail, i) => {
            thumbnail.classList.toggle('active', i ===index);
        });
        
        mainImage.classList.remove('zoomed');
        mainImage.removeEventListener('click', zoomImage);
        mainImage.addEventListener('click', zoomImage);
        
    }

    function zoomImage() {
        mainImage.classList.toggle('zoomed');
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

}