document.addEventListener('DOMContentLoaded', function() {
    let value = 0;

    const button = document.getElementById('Mike');
    const valueDisplay = document.getElementById('points');

    button.addEventListener('click', function() {
        value++;
        valueDisplay.textContent = value;
    });
});
