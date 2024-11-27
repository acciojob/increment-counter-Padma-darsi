//your JS code here. If required.
// Select elements
const counterParagraph = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');

// Initialize counter value
let counterValue = 0;

// Add event listener to the button
incrementButton.addEventListener('click', () => {
    // Display alert with the un-incremented value
    alert(`Current value: ${counterValue}`);
    
    // Increment the counter value
    counterValue++;

    // Update the counter paragraph
    counterParagraph.textContent = counterValue;
});
