document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
            const messageField = document.getElementById('message');
            const formError = document.getElementById('form-error');
            const formSuccess = document.getElementById('form-success');
            
            let isValid = true;
            
            // Basic validation
            if (!nameField.value.trim()) {
                nameField.classList.add('error');
                isValid = false;
            } else {
                nameField.classList.remove('error');
            }
            
            if (!emailField.value.trim() || !isValidEmail(emailField.value)) {
                emailField.classList.add('error');
                isValid = false;
            } else {
                emailField.classList.remove('error');
            }
            
            if (!messageField.value.trim()) {
                messageField.classList.add('error');
                isValid = false;
            } else {
                messageField.classList.remove('error');
            }
            
            if (!isValid) {
                formError.style.display = 'block';
                formSuccess.style.display = 'none';
                return;
            }
            
            // In a real implementation, you would send the form data to a server here
            // For this example, we'll simulate a successful submission
            formError.style.display = 'none';
            formSuccess.style.display = 'block';
            contactForm.reset();
            
            // In a real implementation, you might redirect after successful submission
            // window.location.href = '/thank-you.html';
        });
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
} 
