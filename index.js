const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-bar-list .nav-item");

// Function to toggle mobile menu visibility and scroll lock
function toggleMobileMenu() {
  // Check if the window width is less than or equal to 1024
  if (window.innerWidth <= 1024) {
    // Handle opening of the menu
    menuOpenButton.addEventListener("click", handleMenuOpen);
    
    // Handle closing of the menu
    menuCloseButton.addEventListener("click", handleMenuClose);

    // Close the mobile menu when a nav link is clicked
    navLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });
  } else {
    // Remove event listeners when the screen is resized to a non-mobile width
    menuOpenButton.removeEventListener("click", handleMenuOpen);
    menuCloseButton.removeEventListener("click", handleMenuClose);
    navLinks.forEach((link) => {
      link.removeEventListener("click", handleLinkClick);
    });

    // Ensure the body scroll is restored for larger screens
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  }
}

// Functions to handle the menu opening and closing
function handleMenuOpen() {
  document.body.classList.add("show-mobile-menu");
  document.body.classList.remove("hide-mobile-menu");
  document.documentElement.classList.add("show-mobile-menu");
  document.documentElement.classList.remove("hide-mobile-menu");

  // Lock scrolling when the menu is open
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";

  // Hide the open button and show the close button
  menuOpenButton.style.display = "none";
  menuCloseButton.style.display = "block";
}

function handleMenuClose() {
  document.body.classList.add("hide-mobile-menu");
  document.body.classList.remove("show-mobile-menu");
  document.documentElement.classList.add("hide-mobile-menu");
  document.documentElement.classList.remove("show-mobile-menu");

  // Unlock scrolling when the menu is closed
  document.body.style.overflow = "auto";
  document.documentElement.style.overflow = "auto";

  // Show the open button and hide the close button
  menuOpenButton.style.display = "block";
  menuCloseButton.style.display = "none";
}

function handleLinkClick() {
  document.body.classList.add("hide-mobile-menu");
  document.body.classList.remove("show-mobile-menu");
  document.documentElement.classList.add("hide-mobile-menu");
  document.documentElement.classList.remove("show-mobile-menu");

  // Unlock scrolling when a link is clicked
  document.body.style.overflow = "auto";
  document.documentElement.style.overflow = "auto";

  // Show the open button and hide the close button
  menuOpenButton.style.display = "block";
  menuCloseButton.style.display = "none";
}

// Initial check for mobile screens
toggleMobileMenu();

// Add event listener to check on window resize
window.addEventListener("resize", toggleMobileMenu);
