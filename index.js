
// The form element
const form = document.querySelector('.user-form');

// Form inputs
const input = document.querySelector('#fname');          // Full name input
const email = document.querySelector('#emailaddress');   // Email input
const username = document.querySelector('#username');    // GitHub username input
const file = document.querySelector('#file');            // Avatar file input

// File upload error message
const err = document.querySelector('.err-msg');

// Sections to hide/show
const ticket = document.querySelector('.ticket-form');   // Form section
const result = document.querySelector('.ticket-result'); // Generated ticket section

// Ticket placeholders
const ticketName = document.querySelector('.user-name');
const ticketEmail = document.querySelector('.user-email');
const ticketGithub = document.querySelector('.github-username');

// Attribution 
const attributes = document.querySelector('.attribution');

const ticketDateDisplay = document.querySelector('.event-date');



//    FORM SUBMISSION HANDLER

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Stop page reload

    // Run validation — stop if form is invalid
    if (!validateForm()) return;

    // If valid, generate the ticket
    showTicket();
});



function updateTicketDate() {
    const now = new Date();

    // Format: Jan 18, 2026
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);

    // Format: 04:30 PM
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    // Update the text on the ticket
    if (ticketDateDisplay) {
        ticketDateDisplay.textContent = `${dateString} / ${timeString} / Austin, TX`;
    }
}

// Start the clock as soon as the script loads
setInterval(updateTicketDate, 1000);
updateTicketDate();




//   FORM VALIDATION (

function validateForm() {

    let isValid = true; // Assume form is valid first

    // Remove error states
    document.querySelectorAll('.form-group, .form-group-error').forEach(group => {
        group.classList.remove('show-error');
    });


    const uploadHint = document.querySelector('.upload-hint'); // Select the hint

    // Avatar Check: Is a file actually selected?
    if (file.files.length === 0) {
        err.style.display = 'block';        // Show error
        uploadHint.style.display = 'none';   // HIDE THE HINT HERE
        isValid = false;
    } else {
        // If they DID upload a file, make sure the hint is back and error is gone
        err.style.display = 'none';
        uploadHint.style.display = 'block';
    }


    // Inside your validateForm() function
    const emailParent = email.parentElement;

    if (!email.checkValidity() || email.value.trim() === '') {
        emailParent.classList.add('show-error');
        isValid = false; // Prevents the ticket from generating
    } else {
        emailParent.classList.remove('show-error');
    }

    // Full Name: must not be empty
    if (input.value.trim() === '') {
        input.parentElement.classList.add('show-error');
        isValid = false;
    }


    // GitHub Username: must not be empty
    if (username.value.trim() === '') {
        username.parentElement.classList.add('show-error');
        isValid = false;
    }

    // Return final validation result
    return isValid;
}



//    AVATAR FILE VALIDATION & PREVIEW
file.addEventListener('change', (e) => {
    const chosenFile = e.target.files[0]; // Get selected file
    const uploadHint = document.querySelector('.upload-hint'); // Select the hint


    if (!chosenFile) return; // No file selected

    // File size check (max 500KB)
    if (chosenFile.size > 512000) {
        err.style.display = 'block'; // Show error
        uploadHint.style.display = 'none';   // Hide hint when error is shown        return;
    } else {
        err.style.display = 'none';         // Hide error
        uploadHint.style.display = 'block';  // Show hint back when file is okay

        // Create preview image for ticket
        const imageUrl = URL.createObjectURL(chosenFile);
        document.querySelector('.user-avatar').src = imageUrl;

    };


});




//    SHOW GENERATED TICKET

function showTicket() {


    // // Capture the current moment
    // const issueDate = new Date().toLocaleString('en-US', {
    //     month: 'short',
    //     day: 'numeric',
    //     year: 'numeric',
    //     hour: '2-digit',
    //     minute: '2-digit'
    // });

    // ticketDateDisplay.textContent = `${issueDate} / Austin, TX`;



    // Copy form values into ticket
    ticketName.textContent = input.value;
    ticketEmail.textContent = `${email.value}`;
    ticketGithub.textContent = `${username.value}`;

    // Hide form and show ticket
    ticket.classList.add('hidden');
    result.classList.remove('hidden');

    // Move screen reader focus to the result
    console.log("Validation passed! Showing ticket...");

    result.focus();
}
