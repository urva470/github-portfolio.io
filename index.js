// Utility function to select DOM elements
const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);

// Function to handle smooth scrolling
const scrollToSection = (element) => {
    element.scrollIntoView({
        behavior: 'smooth'
    });
};

// Function to toggle mobile menu
const toggleMobileMenu = () => {
    const nav = select('.nav-menu');
    nav.classList.toggle('active');
};

// Function to handle form submission
const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your form handling logic here
};

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Your initialization code here
});

// Export functions if using modules
export {
    select,
    selectAll,
    scrollToSection,
    toggleMobileMenu,
    handleFormSubmit
};