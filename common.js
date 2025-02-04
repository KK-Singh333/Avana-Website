// Function to inject Navbar and Footer
document.addEventListener("DOMContentLoaded", () => {
    insertNavbar();
    insertFooter();
});

// Navbar Injection
function insertNavbar() {
    const navbarHTML = `
        <div class="navbar">
            <div class="logo">
                <img src="images/indorelogo.png" alt="IIT Indore Logo">
                <span class="IIT">Indian Institute of Technology Indore</span>
            </div>

            <button id="toggle-button" class="md:hidden focus:outline-none" aria-label="Toggle navigation">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>

            <ul id="navbar-links">
                <li><a href="home.html" class="nav-link">Home</a></li>
                <li class="dropdown">
                    <a href="#" class="nav-link sp-link">Our Works</a>
                    <span class="polygon"></span>
                    <ul class="dropdown-menu">
                        <li><a href="24_25event.html" class="dropdown-link">Event 24-25</a></li>
                        <li><a href="23_24event.html" class="dropdown-link">Event 23-24</a></li>
                    </ul>
                </li>
                <li><a href="gallery.html" class="nav-link">Gallery</a></li>
                <li><a href="team.html" class="nav-link">Team</a></li>
                <li><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
        </div>
    `;
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
    initNavbar();
}

// Footer Injection
function insertFooter() {
    const footerHTML = `
        <div class="footer-container">
            <div class="logos">
                <img src="images/indorelogo.png" alt="IIT Indore Logo" id="indorelogo">
                <img src="images/club_icon.png" alt="AVANA Logo" id="avanalogo">
            </div>
            <div class="text-center">
                <h3 class="iit-text">Indian Institute of Technology Indore</h3>
                <h3 class="avana-text">AVANA Club</h3>
            </div>
            <div class="social-links">
                <a href="https://www.linkedin.com/company/avana-iit-indore/" target="_blank" class="social-icon linkedin">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/avana_iiti" target="_blank" class="social-icon instagram">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
            <div class="contact-info">
                <span class="contact-left">Contact: +91 XXXXXXXXXX</span>
                <span class="contact-right">Email ID: avana@iiti.ac.in</span>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", footerHTML);
}

// Navbar Functionality
function initNavbar() {
    const toggleButton = document.getElementById("toggle-button");
    const navbarLinks = document.getElementById("navbar-links");

    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            navbarLinks.classList.toggle("active");
        });
    }

    const dropdown = document.querySelector(".dropdown");
    if (dropdown) {
        const dropdownMenu = dropdown.querySelector(".dropdown-menu");
        const dropdownArrow = dropdown.querySelector(".polygon");

        dropdown.addEventListener("click", (e) => {
            if (!e.target.classList.contains("dropdown-link")) {
                e.preventDefault();
                dropdownMenu.classList.toggle("show");
                dropdownArrow.classList.toggle("rotate");
            }
        });

        document.addEventListener("click", (e) => {
            if (!dropdown.contains(e.target)) {
                dropdownMenu.classList.remove("show");
                dropdownArrow.classList.remove("rotate");
            }
        });
    }

    // Highlight active link
    const currentLocation = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("#navbar-links li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentLocation) {
            link.classList.add("active");
        }
    });
}
