// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const toggleLinks = document.querySelectorAll('.timeline a');

    toggleLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const content = event.target.closest('.timeline').querySelector('.content');
            content.classList.toggle('show');
        });
    });
});
