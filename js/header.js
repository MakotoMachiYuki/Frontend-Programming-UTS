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

    $("#productContainer").hide();
    $("#noResult").hide();
  }
}

function search(input) {
  const productContainer = document.getElementById("productContainer");
  const noResult = document.getElementById("noResult");
  noResult.style.display = "";

  console.log(input);

  productContainer.innerHTML = "";
  let foundProducts = products.filter((product) =>
    product.name.toLowerCase().includes(input.toLowerCase())
  );

  if (foundProducts.length > 0) {
    $("#productContainer").show().css({ display: "flex" });
    $("#noResult").hide();
    foundProducts.forEach((product) => {
      productContainer.innerHTML += `
        <div class="product">
          <img src="${product.img}" alt="${product.name}" />
          <div class="product-info">
            <h3>${product.name}</h3>
          </div>
        </div>
      `;
    });
  } else {
    $("#noResult").show();
  }

  if (!input) {
    $("#productContainer").hide();
    $("#noResult").hide();
  }
}

const products = [
  {
    name: "Iphone 16",
    img: "../images/search/iphone16.jpg",
  },
  {
    name: "Iphone 16 Plus",
    img: "../images/search/iphone16plus.jpg",
  },
  {
    name: "Airpods 2",
    img: "../images/airpodspro2.png",
  },
];

function openFunction() {}
