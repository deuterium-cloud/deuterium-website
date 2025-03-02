const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll('.nav-bar-list .nav-item');

// Function to toggle mobile menu visibility based on screen width
function toggleMobileMenu() {
    if (window.innerWidth <= 1024) { 
        // Only apply this logic for mobile screens
        menuOpenButton.addEventListener("click", () => {
            document.body.classList.add("show-mobile-menu");
            document.body.classList.remove("hide-mobile-menu");

            // Hide the open button and show the close button
            menuOpenButton.style.display = "none";
            menuCloseButton.style.display = "block";
        });

        menuCloseButton.addEventListener("click", () => {
            document.body.classList.add("hide-mobile-menu");
            document.body.classList.remove("show-mobile-menu");

            // Show the open button and hide the close button
            menuOpenButton.style.display = "block";
            menuCloseButton.style.display = "none";
        });

        // Close the mobile menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.add("hide-mobile-menu");
                document.body.classList.remove("show-mobile-menu");

                // Show the open button and hide the close button
                menuOpenButton.style.display = "block";
                menuCloseButton.style.display = "none";
            });
        });
    }
}

// Initial check
toggleMobileMenu();

// Add event listener to check on window resize
window.addEventListener("resize", toggleMobileMenu);
