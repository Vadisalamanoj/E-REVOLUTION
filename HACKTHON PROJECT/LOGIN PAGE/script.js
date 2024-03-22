// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get username and password values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform basic validation
    if (username.trim() === '' || password.trim() === '') {
        document.getElementById('error-message').textContent = 'Please enter both username and password.';
    } else {
        // Here, you can perform further validation or send the data to a server for authentication
        // For demonstration, let's assume the login is successful if both fields are non-empty
        // You can replace this with your actual authentication logic
        // For now, just display a success message
        document.getElementById('error-message').textContent = 'Login successful!';
    }
});
