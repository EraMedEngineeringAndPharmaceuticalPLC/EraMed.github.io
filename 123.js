document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const dropdowns = document.querySelectorAll(".dropdown");
    const mobileMenuToggle = document.createElement("div");
    mobileMenuToggle.classList.add("mobile-menu-toggle");
    mobileMenuToggle.innerHTML = "&#9776;"; // Hamburger icon
    navbar.insertBefore(mobileMenuToggle, navbar.firstChild);

    // Navbar background change on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Dropdown functionality for mobile
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector("a");
        link.addEventListener("click", function (event) {
            event.preventDefault();
            dropdown.classList.toggle("active");
        });
    });

    // Mobile menu toggle
    mobileMenuToggle.addEventListener("click", function () {
        navbar.classList.toggle("open");
    });
});
