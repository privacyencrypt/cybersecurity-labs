document.addEventListener("DOMContentLoaded", () => {
    // Collapsible sections
    const collapsibles = document.querySelectorAll(".collapsible");
    collapsibles.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("active");
            const content = button.nextElementSibling;
            if (content) {
                content.style.maxHeight = content.style.maxHeight ? null : `${content.scrollHeight}px`;
                const icon = button.querySelector("i");
                if (icon) {
                    icon.classList.toggle("rotate");
                }
            }
        });
    });

    // Toggle Dark Mode
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Back to top button functionality
    const backToTopButton = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});