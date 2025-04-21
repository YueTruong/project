document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = [
        document.getElementById('balloon1'),
        document.getElementById('balloon2'),
        document.getElementById('cakeInteract'),
        document.getElementById('giftBox'),
        document.getElementById('candleLight'),
        document.getElementById('partyPopper')
    ];
    const partyButton = document.getElementById('partyButton');
    const partyScene = document.querySelector('.party-scene');
    const celebration = document.querySelector('.celebration');

    // Check if all checkboxes are checked to enable the button
    const checkAllChecked = () => {
        const allChecked = checkboxes.every(checkbox => checkbox.checked);
        partyButton.disabled = !allChecked;
    };

    // Add change event listeners to all checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', checkAllChecked);
    });

    // Handle single-click button behavior
    partyButton.addEventListener('click', () => {
        partyScene.style.display = 'none';
        celebration.classList.add('active');
        partyButton.disabled = true; // Prevent further clicks
    }, { once: true }); // Ensure the event fires only once
});