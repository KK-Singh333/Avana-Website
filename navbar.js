document.getElementById("toggle-button").addEventListener("click", function () {
  const navbarLinks = document.getElementById("navbar-links");
  navbarLinks.classList.toggle("active");
});

// JavaScript for dropdown functionality
const dropdown = document.querySelector(".dropdown");
const dropdownMenu = dropdown.querySelector(".dropdown-menu");
const dropdownArrow = dropdown.querySelector(".polygon");

dropdown.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default anchor behavior
  dropdownMenu.classList.toggle("show"); // Toggle visibility of the dropdown menu
  dropdownArrow.classList.toggle("rotate"); // Toggle rotation of the arrow
});

// Close the dropdown when clicking outside
document.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target)) {
    dropdownMenu.classList.remove("show");
    dropdownArrow.classList.remove("rotate");
  }
});

// JavaScript to set the active class on the clicked link
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove active class from all links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add active class to the clicked link
    this.classList.add("active");
  });
});
