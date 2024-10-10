const products = {
    compro1: {
        name: "Airpods Pro (2nd Generation)",
        image: "../../images/produk/airpodspro1.png",
        specs: "H2 chip, Active Noise Cancellation (ANC), transparency mode, spatial audio. Supports adaptive EQ, up to 6 hours of battery life (30 hours with the case). The case has a built-in speaker and Find My support, sweat and water-resistant (IPX4)."
    },
    compro2: {
        name: "Sony WF-1000xM4",
        image: "../../images/produk/sonyblack1.png",
        specs: "Sony's V1 processor, industry-leading noise cancellation, high-resolution audio with LDAC support, up to 8 hours of playback with ANC on (24 hours with the case). Feature Speak-to-Chat and Adaptive Sound Control, IPX4 water resistance rating."
    },
    compro3: {
        name: "Nothing Ear 2",
        image: "../../images/produk/nothingear1.png",
        specs: "Hi-Res Audio certification with LHDC 5.0 codec support, adaptive Active Noise Cancellation (ANC). Up to 6 hours of playback (36 hours with the case), personalized sound profiles with in-app customization. Water and dust-resistant with an IP54 rating, case is IP55-rated."
    },
    compro4: {
        name: "Soundcore Space One",
        image: "../../images/produk/../../images/produk/spaceone1.png",
        specs: "Adaptive ANC and 40mm drivers with custom-tuned drivers for rich audio. Up to 55 hours of playback with ANC off (40 hours with ANC on) and fast charging. With Bluetooth multipoint connectivity and an IPX4 water resistance rating"
    }
};

function updateProduct(column) {
    const select = document.getElementById(`compro${column}`);
    const details = document.getElementById(`details${column}`);
    const selectedProduct = products[select.value];
    
    if (selectedProduct) {
        document.getElementById(`image${column}`).src = selectedProduct.image;
        document.getElementById(`image${column}`).alt = selectedProduct.name;
        document.getElementById(`name${column}`).textContent = selectedProduct.name;
        document.getElementById(`specs${column}`).textContent = selectedProduct.specs;
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

function getProductInfo(productElement) {
    const nameElement = productElement.querySelector('h3');
    const priceElement = productElement.querySelector('p');
    const name = nameElement.textContent;
    const priceMatch = priceElement.textContent.match(/IDR ([\d,.]+)/);
    const price = priceMatch ? parseInt(priceMatch[1].replace(/[,\.]/g, '')) : 0;
    return { name, price, element: productElement };
}

function sortProducts() {
    const sortType = document.getElementById('sortSelect').value;
    const productContainer = document.getElementById('productContainer');
    const productElements = Array.from(productContainer.children);
    
    const sortedProducts = productElements.map(getProductInfo).sort((a, b) => {
        switch(sortType) {
            case 'nameAsc':
                return a.name.localeCompare(b.name);
            case 'nameDesc':
                return b.name.localeCompare(a.name);
            case 'priceLow':
                return a.price - b.price;
            case 'priceHigh':
                return b.price - a.price;
            default:
                return 0;
        }
    });

while (productContainer.firstChild) {
    productContainer.removeChild(productContainer.firstChild);
}

sortedProducts.forEach(product => {
    productContainer.appendChild(product.element);
});

}

document.addEventListener('DOMContentLoaded', sortProducts);
