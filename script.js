// Adding any extra interactions or animations through JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const message = document.querySelector('.diwali-message');
    
    // Toggle class to create a glowing effect
    setInterval(function() {
        message.classList.toggle('glow');
    }, 1000);
});
