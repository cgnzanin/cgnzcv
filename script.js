document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple Project Filter (Can be expanded later)
    // For now, let's just log which project card is clicked for analytics or future modal expansion
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = '#38BDF8'; // Highlight border on hover
        });

        card.addEventListener('mouseleave', () => {
            card.style.borderColor = '#E2E8F0'; // Reset border
        });
    });

    // Add a simple print shortcut listener (Ctrl+P is default, but maybe a button action)
    const printBtn = document.querySelector('.btn-secondary');
    if (printBtn) {
        printBtn.addEventListener('click', (e) => {
            // e.preventDefault(); // Default is onclick="window.print()", so this is just extra safety or custom logic
            console.log('Preparing to print CV...');
        });
    }

    console.log('Portfolio Loaded - Cleber Gabriel N. Zanin');
});
