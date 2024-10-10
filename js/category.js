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
    },
    compro5: {
        name: "CMF Watch Pro 2",
        image: "../../images/produk/nothingwatchblue1.png",
        specs: "1.96-inch AMOLED display with 410x502 resolution, 50Hz refresh rate, and IP68 water resistance. It includes built-in GPS, SpO2 sensor, heart rate monitor, and offers up to 13 days of battery life."
    },
    compro6: {
        name: "Samsung Galaxy Watch 7",
        image: "../../images/produk/galaxywatch1.png",
        specs: "1.5-inch Super AMOLED display, Exynos W930 chipset, 2GB RAM, 16GB storage, and runs on WearOS. It supports ECG, blood pressure monitoring, and has up to 50 hours of battery life with 5ATM + IP68 water resistance."
    },
    compro7: {
        name: "Apple Watch Series 9",
        image: "../../images/produk/applewatch1.png",
        specs: "S9 SiP chip, it has a 1.9-inch Retina LTPO OLED display with 1000 nits brightness. It includes advanced sensors like blood oxygen, ECG, and a new double-tap gesture, offering up to 18 hours of battery life."
    },
    compro8: {
        name: "Huawei Watch Ultimate",
        image: "../../images/produk/huaweiwatchblue1.png",
        specs: "1.5-inch LTPO AMOLED display with 466x466 resolution, water resistance up to 100m, and dual-band GPS. It offers robust health tracking with ECG and SpO2 sensors, plus up to 14 days of battery life."
    },
    compro9: {
        name: "Elements Backpack Pro",
        image: "../../images/produk/alpaka.png",
        specs: " Made from weatherproof fabric with YKK AquaGuard zippers, it has a 30L capacity, 16 inch laptop compartment, padded back, and ergonomic straps."
    },
    compro10: {
        name: "Able Carry Max Backpack",
        image: "../../images/produk/ablebag1.png",
        specs: "Constructed from Cordura nylon with YKK zippers, this 30L backpack features a 17 inch laptop sleeve, water resistance, airflow back panel, and organized internal compartments."
    },
    compro11: {
        name: "AER Day Sling 3",
        image: "../../images/produk/aerbag1.png",
        specs: "uilt from 1680D Cordura ballistic nylon with YKK zippers, this 3L sling bag has an 11 inch tablet compartment, internal organization pockets, and an adjustable strap."
    },
    compro12: {
        name: "Orbit Key Nest",
        image: "../../images/produk/orbitkeybag1.png",
        specs: "A polycarbonate portable organizer with customizable compartments, elastic bands, and a 10W wireless charging pad."
    },
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
