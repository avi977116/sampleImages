// Simple animation for the page elements
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.soil-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = 1;
                    card.style.transform = 'translateY(0)';
                }, 200 * index);
            });
            
            // Add smooth scrolling for the CTA button
            document.querySelector('.cta-button').addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector('#soil-types').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        const searchInput = document.getElementById('soilSearch');
searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    document.querySelectorAll('.soil-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(filter) ? '' : 'none';
    });
});