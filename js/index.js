// =====================================================
// Mobile nav toggler
// =====================================================
(function () {
    var toggler = document.getElementById("nav-toggler");
    var navLinks = document.getElementById("nav-links");
    if (!toggler || !navLinks) return;

    // Make sure the toggler is keyboard-accessible (it's a <div>).
    if (!toggler.hasAttribute("tabindex")) toggler.setAttribute("tabindex", "0");
    if (!toggler.hasAttribute("role")) toggler.setAttribute("role", "button");
    if (!toggler.hasAttribute("aria-label")) toggler.setAttribute("aria-label", "Toggle navigation menu");
    toggler.setAttribute("aria-controls", "nav-links");
    toggler.setAttribute("aria-expanded", "false");

    function toggleMenu() {
        var isOpen = navLinks.classList.toggle("is-open");
        toggler.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }

    toggler.addEventListener("click", toggleMenu);
    toggler.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
            e.preventDefault();
            toggleMenu();
        }
    });

    // Close the menu when a nav link is clicked (mobile only)
    navLinks.addEventListener("click", function (e) {
        if (e.target.tagName === "A" && navLinks.classList.contains("is-open")) {
            navLinks.classList.remove("is-open");
            toggler.setAttribute("aria-expanded", "false");
        }
    });
})();
