
document.querySelectorAll('.choose-plan').forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'selected' class from all buttons
        document.querySelectorAll('.choose-plan').forEach(btn => {
            btn.classList.remove('selected');
        });
        // Add 'selected' class to the clicked button
        this.classList.add('selected');

        // Highlight the corresponding pricing card
        let cardId = this.parentNode.id;
        document.querySelectorAll('.pricing-card').forEach(card => {
            card.classList.remove('highlighted');
            if (card.id === cardId) {
                card.classList.add('highlighted');
            }
        });
    });
});