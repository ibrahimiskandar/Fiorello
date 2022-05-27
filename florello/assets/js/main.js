const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

var $cards = $(".cards").isotope({
  itemSelector: ".card",
  layoutMode: "fitRows",
});
// filter functions

// bind filter button click
$(".options").on("click", "span", function () {
  var filterValue = $(this).attr("data-filter");
  $cards.isotope({ filter: filterValue });
});
