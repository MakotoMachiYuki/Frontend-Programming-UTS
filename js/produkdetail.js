document.addEventListener("DOMContentLoaded", () => {
  initProductSlider(1, [
    "../../images/produk/airpodspro1.png",
    "../../images/produk/airpodspro2.png",
    "../../images/produk/airpodspro3.png",
    "../../images/produk/airpodspro4.png",
    "../../images/produk/airpodspro5.png",
    "../../images/produk/airpodspro6.png",
  ]);

  const blackImages3 = [
    "../../images/produk/spaceone1.png",
    "../../images/produk/spaceone2.png",
    "../../images/produk/spaceone3.png",
    "../../images/produk/spaceone4.png",
    "../../images/produk/spaceone5.png",
    "../../images/produk/spaceone6.png",
  ];

  const creamImages3 = [
    "../../images/produk/spaceonecream1.png",
    "../../images/produk/spaceonecream2.png",
    "../../images/produk/spaceonecream3.png",
    "../../images/produk/spaceonecream4.png",
    "../../images/produk/spaceonecream5.png",
    "../../images/produk/spaceonecream6.png",
  ];

  const blueImages3 = [
    "../../images/produk/spaceoneblue1.png",
    "../../images/produk/spaceoneblue2.png",
    "../../images/produk/spaceoneblue3.png",
    "../../images/produk/spaceoneblue4.png",
    "../../images/produk/spaceoneblue5.png",
    "../../images/produk/spaceoneblue6.png",
  ];

  const blackImages4 = [
    "../../images/produk/nothingear1.png",
    "../../images/produk/nothingear2.png",
    "../../images/produk/nothingear3.png",
  ];

  const whiteImages4 = [
    "../../images/produk/nothingearwhite1.png",
    "../../images/produk/nothingearwhite2.png",
    "../../images/produk/nothingearwhite3.png",
  ];

  const midnightImages5 = [
    "../../images/produk/applewatch1.png",
    "../../images/produk/applewatch2.png",
    "../../images/produk/applewatch3.png",
    "../../images/produk/applewatch4.png",
    "../../images/produk/applewatch5.png",
    "../../images/produk/applewatch6.png",
  ];

  const redImages5 = [
    "../../images/produk/applewatchred1.png",
    "../../images/produk/applewatchred2.png",
    "../../images/produk/applewatchred3.png",
    "../../images/produk/applewatchred4.png",
    "../../images/produk/applewatchred5.png",
    "../../images/produk/applewatchred6.png",
  ];

  const starlightImages5 = [
    "../../images/produk/applewatchstarlight1.png",
    "../../images/produk/applewatchstarlight2.png",
    "../../images/produk/applewatchstarlight3.png",
    "../../images/produk/applewatchstarlight4.png",
    "../../images/produk/applewatchstarlight5.png",
    "../../images/produk/applewatchstarlight6.png",
  ];

  const silverImages5 = [
    "../../images/produk/applewatchsilver1.png",
    "../../images/produk/applewatchsilver2.png",
    "../../images/produk/applewatchsilver3.png",
    "../../images/produk/applewatchsilver4.png",
    "../../images/produk/applewatchsilver5.png",
    "../../images/produk/applewatchsilver6.png",
  ];

  const pinkImages5 = [
    "../../images/produk/applewatchpink1.png",
    "../../images/produk/applewatchpink2.png",
    "../../images/produk/applewatchpink3.png",
    "../../images/produk/applewatchpink4.png",
    "../../images/produk/applewatchpink5.png",
    "../../images/produk/applewatchpink6.png",
  ];

  const greenImages6 = [
    "../../images/produk/huaweiwatchgreen1.png",
    "../../images/produk/huaweiwatchgreen2.png",
    "../../images/produk/huaweiwatchgreen3.png",
  ];

  const blueImages6 = [
    "../../images/produk/huaweiwatchblue1.png",
    "../../images/produk/huaweiwatchblue2.png",
    "../../images/produk/huaweiwatchblue3.png",
  ];

  const darkgreyImages7 = [
    "../../images/produk/nothingwatchdarkgrey1.png",
    "../../images/produk/nothingwatchdarkgrey2.png",
    "../../images/produk/nothingwatchdarkgrey3.png",
    "../../images/produk/nothingwatchdarkgrey4.png",
  ];

  const greyImages7 = [
    "../../images/produk/nothingwatchgrey1.png",
    "../../images/produk/nothingwatchgrey2.png",
    "../../images/produk/nothingwatchgrey3.png",
    "../../images/produk/nothingwatchgrey4.png",
  ];

  const blueImages7 = [
    "../../images/produk/nothingwatchblue1.png",
    "../../images/produk/nothingwatchblue2.png",
    "../../images/produk/nothingwatchblue3.png",
    "../../images/produk/nothingwatchblue4.png",
  ];

  const orangeImages7 = [
    "../../images/produk/nothingwatchorange1.png",
    "../../images/produk/nothingwatchorange2.png",
    "../../images/produk/nothingwatchorange3.png",
    "../../images/produk/nothingwatchorange4.png",
  ];

  const greenImages8 = [
    "../../images/produk/galaxywatch1.png",
    "../../images/produk/galaxywatch2.png",
    "../../images/produk/galaxywatch3.png",
    "../../images/produk/galaxywatch4.png",
    "../../images/produk/galaxywatch5.png",
  ];

  const silverImages8 = [
    "../../images/produk/galaxywatchsilver1.png",
    "../../images/produk/galaxywatchsilver2.png",
    "../../images/produk/galaxywatchsilver3.png",
    "../../images/produk/galaxywatchsilver4.png",
    "../../images/produk/galaxywatchsilver5.png",
  ];

  const blackImages9 = [
    "../../images/produk/alpakabag1.png",
    "../../images/produk/alpakabag2.png",
    "../../images/produk/alpakabag3.png",
    "../../images/produk/alpakabag4.png",
    "../../images/produk/alpakabag5.png",
    "../../images/produk/alpakabag6.png",
    "../../images/produk/alpakabag7.png",
    "../../images/produk/alpakabag8.png",
  ];

  const black1Images9 = [
    "../../images/produk/alpakablack1.png",
    "../../images/produk/alpakablack2.png",
    "../../images/produk/alpakablack3.png",
    "../../images/produk/alpakablack4.png",
    "../../images/produk/alpakablack5.png",
    "../../images/produk/alpakablack6.png",
    "../../images/produk/alpakablack7.png",
    "../../images/produk/alpakablack8.png",
  ];

  const greenImages9 = [
    "../../images/produk/alpakagreen1.png",
    "../../images/produk/alpakagreen2.png",
    "../../images/produk/alpakagreen3.png",
    "../../images/produk/alpakagreen4.png",
    "../../images/produk/alpakagreen5.png",
    "../../images/produk/alpakagreen6.png",
    "../../images/produk/alpakagreen7.png",
    "../../images/produk/alpakagreen8.png",
  ];

  const blackImages10 = [
    "../../images/produk/orbitkeybag1.png",
    "../../images/produk/orbitkeybag2.png",
    "../../images/produk/orbitkeybag3.png",
    "../../images/produk/orbitkeybag4.png",
    "../../images/produk/orbitkeybag5.png",
    "../../images/produk/orbitkeybag6.png",
    "../../images/produk/orbitkeybag7.png",
  ];

  const ashImages10 = [
    "../../images/produk/orbitkeybagash1.png",
    "../../images/produk/orbitkeybagash2.png",
    "../../images/produk/orbitkeybagash3.png",
    "../../images/produk/orbitkeybagash4.png",
    "../../images/produk/orbitkeybagash5.png",
    "../../images/produk/orbitkeybagash6.png",
    "../../images/produk/orbitkeybagash7.png",
  ];

  const blackImages = [
    "../../images/produk/sonyblack1.png",
    "../../images/produk/sonyblack2.png",
    "../../images/produk/sonyblack3.png",
    "../../images/produk/sonyblack4.png",
    "../../images/produk/sonyblack5.png",
  ];

  const silverImages = [
    "../../images/produk/sonysilver1.png",
    "../../images/produk/sonysilver2.png",
    "../../images/produk/sonysilver3.png",
    "../../images/produk/sonysilver4.png",
    "../../images/produk/sonysilver5.png",
  ];

  const blackImages11 = [
    "../../images/produk/ablebag1.png",
    "../../images/produk/ablebag2.png",
    "../../images/produk/ablebag3.png",
    "../../images/produk/ablebag4.png",
    "../../images/produk/ablebag5.png",
    "../../images/produk/ablebag6.png",
  ];

  const greenImages11 = [
    "../../images/produk/ablebaggreen1.png",
    "../../images/produk/ablebaggreen2.png",
    "../../images/produk/ablebaggreen3.png",
    "../../images/produk/ablebaggreen4.png",
    "../../images/produk/ablebaggreen5.png",
    "../../images/produk/ablebaggreen6.png",
  ];

  const blueImages11 = [
    "../../images/produk/ablebagblue1.png",
    "../../images/produk/ablebagblue2.png",
    "../../images/produk/ablebagblue3.png",
    "../../images/produk/ablebagblue4.png",
    "../../images/produk/ablebagblue5.png",
    "../../images/produk/ablebagblue6.png",
  ];

  const brownImages11 = [
    "../../images/produk/ablebagbrown1.png",
    "../../images/produk/ablebagbrown2.png",
    "../../images/produk/ablebagbrown3.png",
    "../../images/produk/ablebagbrown4.png",
    "../../images/produk/ablebagbrown5.png",
    "../../images/produk/ablebagbrown6.png",
  ];

  const blackImages12 = [
    "../../images/produk/aerbag1.png",
    "../../images/produk/aerbag2.png",
    "../../images/produk/aerbag3.png",
    "../../images/produk/aerbag4.png",
    "../../images/produk/aerbag5.png",
    "../../images/produk/aerbag6.png",
  ];

  const grayImages12 = [
    "../../images/produk/aerbaggray1.png",
    "../../images/produk/aerbaggray2.png",
    "../../images/produk/aerbaggray3.png",
    "../../images/produk/aerbaggray4.png",
    "../../images/produk/aerbaggray5.png",
    "../../images/produk/aerbaggray6.png",
  ];

  const oliveImages12 = [
    "../../images/produk/aerbagolive1.png",
    "../../images/produk/aerbagolive2.png",
    "../../images/produk/aerbagolive3.png",
    "../../images/produk/aerbagolive4.png",
    "../../images/produk/aerbagolive5.png",
    "../../images/produk/aerbagolive6.png",
  ];

  initProductSlider(2, blackImages);
  initProductSlider(3, blackImages3);
  initProductSlider(4, blackImages4);
  initProductSlider(5, midnightImages5);
  initProductSlider(6, greenImages6);
  initProductSlider(7, darkgreyImages7);
  initProductSlider(8, greenImages8);
  initProductSlider(9, blackImages9);
  initProductSlider(10, blackImages10);
  initProductSlider(11, blackImages11);
  initProductSlider(12, blackImages12);

  const colorElements = document.querySelectorAll(".colors .color");
  colorElements.forEach((colorElement) => {
    colorElement.addEventListener("click", function () {
      const selectedColor = this.getAttribute("color");
      if (selectedColor === "black") {
        initProductSlider(2, blackImages);
      } else if (selectedColor === "silver") {
        initProductSlider(2, silverImages);
      }

      if (selectedColor === "et black") {
        initProductSlider(3, blackImages3);
      } else if (selectedColor === "latte cream") {
        initProductSlider(3, creamImages3);
      } else if (selectedColor === "sky blue") {
        initProductSlider(3, blueImages3);
      }

      if (selectedColor === "black") {
        initProductSlider(4, blackImages4);
      } else if (selectedColor === "white") {
        initProductSlider(4, whiteImages4);
      }

      if (selectedColor === "midnight") {
        initProductSlider(5, midnightImages5);
      } else if (selectedColor === "red") {
        initProductSlider(5, redImages5);
      } else if (selectedColor === "starlight") {
        initProductSlider(5, starlightImages5);
      } else if (selectedColor === "silver") {
        initProductSlider(5, silverImages5);
      } else if (selectedColor === "pink") {
        initProductSlider(5, pinkImages5);
      }

      if (selectedColor === "green") {
        initProductSlider(6, greenImages6);
      } else if (selectedColor === "blue") {
        initProductSlider(6, blueImages6);
      }

      if (selectedColor === "darkgrey") {
        initProductSlider(7, darkgreyImages7);
      } else if (selectedColor === "grey") {
        initProductSlider(7, greyImages7);
      } else if (selectedColor === "blue") {
        initProductSlider(7, blueImages7);
      } else if (selectedColor === "orange") {
        initProductSlider(7, orangeImages7);
      }

      if (selectedColor === "green") {
        initProductSlider(8, greenImages8);
      } else if (selectedColor === "silver") {
        initProductSlider(8, silverImages8);
      }

      if (selectedColor === "black") {
        initProductSlider(9, blackImages9);
      } else if (selectedColor === "black1") {
        initProductSlider(9, black1Images9);
      } else if (selectedColor === "green") {
        initProductSlider(9, greenImages9);
      }

      if (selectedColor === "black") {
        initProductSlider(10, blackImages10);
      } else if (selectedColor === "ash") {
        initProductSlider(10, ashImages10);
      }

      if (selectedColor === "black") {
        initProductSlider(11, blackImages11);
      } else if (selectedColor === "green") {
        initProductSlider(11, greenImages11);
      } else if (selectedColor === "blue") {
        initProductSlider(11, blueImages11);
      } else if (selectedColor === "brown") {
        initProductSlider(11, brownImages11);
      }

      if (selectedColor === "black") {
        initProductSlider(12, blackImages12);
      } else if (selectedColor === "gray") {
        initProductSlider(12, grayImages12);
      } else if (selectedColor === "olive") {
        initProductSlider(12, oliveImages12);
      }
    });
  });
});

function initProductSlider(productId, images) {
  let currentIndex = 0;

  const mainImage = document.getElementById(`mainImage${productId}`);
  const prevBtn = document.getElementById(`prevBtn${productId}`);
  const nextBtn = document.getElementById(`nextBtn${productId}`);
  const thumbnailsContainer = document.querySelector(
    `#product${productId} .thumbnail-images`
  );

  if (!mainImage || !thumbnailsContainer) {
    return;
  }

  thumbnailsContainer.innerHTML = "";
  images.forEach((imageSrc, index) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = imageSrc;
    thumbnail.classList.add("product-img", "thumbnail");
    thumbnail.setAttribute("data-index", index);

    thumbnailsContainer.appendChild(thumbnail);

    thumbnail.addEventListener("click", () => {
      currentIndex = index;
      updateImage(currentIndex);
    });
  });

  const thumbnails = thumbnailsContainer.querySelectorAll(".thumbnail");

  function updateImage(index) {
    mainImage.src = images[index];

    thumbnails.forEach((thumbnail, i) => {
      thumbnail.classList.toggle("active", i === index);
    });

    mainImage.classList.remove("zoomed");
    mainImage.removeEventListener("click", zoomImage);
    mainImage.addEventListener("click", zoomImage);
  }

  function zoomImage() {
    mainImage.classList.toggle("zoomed");
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    updateImage(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    updateImage(currentIndex);
  });

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", function () {
      currentIndex = index;
      updateImage(currentIndex);
    });
  });

  updateImage(currentIndex);
}
