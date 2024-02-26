document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('nav ul.menu-items');

    // Function to add animation to menu items
    function animateMenuItems() {
        const items = menuItems.querySelectorAll('li');
        items.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
            item.classList.toggle('animate');
        });
    }

    // Toggle menu visibility on click
    menuToggle.addEventListener('click', function() {
        menuItems.classList.toggle('menu-open');
        animateMenuItems(); // Add animation when menu is toggled
    });

    // Close menu when a menu item is clicked
    menuItems.querySelectorAll('li a').forEach(function(item) {
        item.addEventListener('click', function() {
            menuItems.classList.remove('menu-open');
            animateMenuItems(); // Add animation when menu is closed
        });
    });
});
