// Select elements
const counterParagraph = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');

// Initialize counter value
let counterValue = 0;

// Add click event listener to the button
incrementButton.addEventListener('click', () => {
    // Display alert with the current un-incremented value
    alert(counterValue);

    // Increment the counter value
    counterValue++;

    // Update the counter paragraph to show the new value
    counterParagraph.textContent = counterValue;
});
