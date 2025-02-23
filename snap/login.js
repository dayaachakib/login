
//script of login.html file


function redirectToSnapchat(event) {
    event.preventDefault(); // Prevent form submission

    const passwordInput = document.getElementById('password');
    const incorrectMessage = document.querySelector('.incorrect');
    
    // Check if password is at least 8 characters long
    if (passwordInput.value.length < 8) {
        incorrectMessage.style.display = 'block';  // Show error message
        return false;
    } else {
        incorrectMessage.style.display = 'none';  // Hide error message if password is valid
        
        // Redirect to your Snapchat profile
        window.location.href = "https://www.snapchat.com/add/callme_keelly?share_id=VNfztI0VT0c&locale=en-US";
        return true;
    }
}

// Toggle password visibility
document.querySelector('.toggle-password').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.src = 'img/eye-open.svg';
    } else {
        passwordField.type = 'password';
        eyeIcon.src = 'img/eye-closed.svg';
    }
});

// Switch between username/email and phone number
document.getElementById('switch-to-phone').addEventListener('click', function () {
    const usernameInput = document.getElementById('username');
    const label = document.querySelector('label[for="username"]');

    if (label.textContent === 'USERNAME OR EMAIL') {
        label.textContent = 'PHONE NUMBER';
        usernameInput.type = 'tel';
        this.textContent = 'Use email instead';
    } else {
        label.textContent = 'USERNAME OR EMAIL';
        usernameInput.type = 'text';
        this.textContent = 'Use phone number instead';
    }
});

// Show error message on page load, hide it when user clicks anywhere
window.onload = function() {
    var errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'block';

    document.body.addEventListener('click', function() {
        errorMessage.style.display = 'none';
    });
};

  