$(function () {
  $("#header").load("/header/header.html", function () {
    const searchGlassLogo = document.getElementById("mainSearchGlassLogo");
    const searchHeader = document.getElementById("searchHeader");

    searchGlassLogo.addEventListener("click", () => {
      clickSearchIcon(true);
      const searchInput = document.getElementById("searchInput");
      searchInput.focus();
    });

    document.addEventListener("click", (e) => {
      if (!searchHeader.contains(e.target) && e.target !== searchGlassLogo) {
        clickSearchIcon(false);
      }
    });
  });
});

function clickSearchIcon(searchIcon) {
  var searchHeader = document.getElementById("searchHeader");

  if (
    searchIcon === true &&
    (searchHeader.style.display === "none" ||
      searchHeader.style.opacity === "0")
  ) {
    searchHeader.style.display = "flex";
    searchHeader.style.zIndex = "0";

    setTimeout(() => {
      searchHeader.style.height = "75px";
      searchHeader.style.opacity = "1";
    }, 10);
  } else {
    searchHeader.style.display = "none";
    searchHeader.style.opacity = "0";
    searchHeader.style.height = "0";
  }
}
