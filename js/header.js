$(document).ready(function () {
  $(function () {
    $("#header").load("../../html/header.html", function () {
      const searchGlassLogo = document.getElementById("mainSearchGlassLogo");
      const searchHeader = document.getElementById("searchHeader");
      const menuToggle = document.getElementById("menuToggle");
      const sidebarMenu = document.getElementById("sidebarMenu");
      const sidebarClose = document.getElementById("closeSidebar");

      searchGlassLogo.addEventListener("click", () => {
        clickSearchIcon(true);
        const searchInput = document.getElementById("searchInput");
        searchInput.focus();
      });

      searchInput.addEventListener("input", () => {
        search(searchInput.value.trim());
      });

      document.addEventListener("click", (e) => {
        if (!searchHeader.contains(e.target) && e.target !== searchGlassLogo) {
          clickSearchIcon(false);
        }
      });
      menuToggle.addEventListener("click", () => {
        sidebarMenu.style.display = "flex";
      });

      sidebarClose.addEventListener("click", () => {
        sidebarMenu.style.display = "none";
      });

      $(".menuItem").click(() => {
        $(".dropDownContent").slideUp();
        $(".fa-caret-up").hide();
        $(".fa-caret-down").show();

        var content = $(this).find(".dropDownContent");
        if (content.is(":visible")) {
          content.slideUp();
        } else {
          $(".caretText").css({
            color: "white",
            "border-bottom": "white 1px solid",
          });
          content.slideDown();
          $(this).find(".fa-caret-up").show();
          $(this).find(".fa-caret-down").hide();
        }
      });
    });
  }, $("#footer").load("../../html/footer.html"));
});

function clickSearchIcon(searchIcon) {
  var searchHeader = document.getElementById("searchHeader");

  if (
    searchIcon === true &&
    (searchHeader.style.display === "none" ||
      searchHeader.style.opacity === "0" ||
      searchHeader.style.display === "")
  ) {
    $("#searchHeader")
      .slideDown()
      .css({ display: "flex", zIndex: "0", height: "75px", opacity: "1" });
  } else {
    $("#searchInput").val("");

    $("#searchHeader").slideUp();

    $("#productContainerSearch").hide();
    $("#noResult").hide();
  }
}

function search(input) {
  const productContainer = document.getElementById("productContainerSearch");
  const noResult = document.getElementById("noResult");
  noResult.style.display = "";

  console.log(input);

  productContainer.innerHTML = "";
  let foundProducts = productsSearch.filter((product) =>
    product.name.toLowerCase().includes(input.toLowerCase())
  );

  if (foundProducts.length > 0) {
    $("#productContainerSearch").show().css({ display: "flex" });
    $("#noResult").hide();
    foundProducts.forEach((product) => {
      productContainer.innerHTML += `
      <div class="productSearch">
      <a href="${product.page}">
          <img src="${product.img}" alt="${product.name}" />
          <div class="productInfoSearch">
            <h3>${product.name}</h3>
          </div>
          </a>
        </div>
      `;
    });
  } else {
    $("#noResult").show();
  }

  if (!input) {
    $("#productContainerSearch").hide();
    $("#noResult").hide();
  }
}

const productsSearch = [
  {
    name: "Airpods Pro",
    img: "../../images/produk/airpodspro1.png",
    page: "../../html/product/airpodspro.html",
  },
  {
    name: "Space One",
    img: "../../images/produk/spaceone1.png",
    page: "../../html/product/soundcore.html",
  },

  {
    name: "Ear 2",
    img: "../../images/produk/nothingear1.png",
    page: "../../html/product/nothinggear.html",
  },
  {
    name: "Watch 9",
    img: "../../images/produk/applewatch1.png",
    page: "../../html/product/applewatch.html",
  },

  {
    name: "CMF Watch Pro 2",
    img: "../../images/produk/nothingwatchdarkgrey1.png",
    page: "../../html/product/nothingwatch.html",
  },

  {
    name: "Watch Ultimate",
    img: "../../images/produk/huaweiwatchblue1.png",
    page: "../../html/product/huaweiwatch.html",
  },

  {
    name: "Galaxy Watch 1",
    img: "../../images/produk/galaxywatch1.png",
    page: "../../html/product/galaxywatch.html",
  },

  {
    name: "Elements Backpack Pro",
    img: "../../images/produk/alpakabag1.png",
    page: "../../html/product/alpakabag.html",
  },

  {
    name: "Nest",
    img: "../../images/produk/orbitkeybag1.png",
    page: "../../html/product/orbitkeybag.html",
  },

  {
    name: "Sony WF-1000XM4",
    img: "../../images/produk/sonyblack1.png",
    page: "../../html/product/sony.html",
  },

  {

    name: "Max Backpack",

    img: "../../images/produk/ablebag1.png",
    page: "../../html/product/ablebag.html",
  },

  {
    name: "Day Sling 3",
    img: "../../images/produk/aerbag1.png",
    page: "../../html/product/aerbag.html",
  },
];
