// script.js - Login functionality

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Get references to HTML elements using their IDs
    const signInBtn = document.getElementById('signInBtn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginSection = document.getElementById('loginSection');
    const dashboardSection = document.getElementById('dashboardSection');
    const loginMessage = document.getElementById('loginMessage');
    
    // Admin credentials
    const ADMIN_USERNAME = 'c';
    const ADMIN_PASSWORD = 'c'; // You can change this password
    
    // Add click event listener to the Sign In button
    signInBtn.addEventListener('click', function(event) {
        // Prevent any default behavior
        event.preventDefault();
        
        // Get the values from input fields
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        // Validate input fields
        if (username === '' || password === '') {
            showMessage('Please enter both username and password', 'error');
            return;
        }
        
        // Check credentials
        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            // Successful login
            successfulLogin();
        } else {
            // Failed login
            showMessage('Invalid username or password', 'error');
            // Clear password field for security
            passwordInput.value = '';
        }
    });
    
    // Function to handle successful login
    function successfulLogin() {
        // Hide login section
        loginSection.classList.add('hidden');
        
        // Show dashboard section
        dashboardSection.classList.remove('hidden');
        
        // Clear any previous messages
        loginMessage.classList.add('hidden');
        loginMessage.textContent = '';
        
        // Clear input fields
        usernameInput.value = '';
        passwordInput.value = '';
        
        // Optional: Show success message (you can remove this if not needed)
        console.log('Login successful!');
    }
    
    // Function to show error messages
    function showMessage(message, type) {
        loginMessage.textContent = message;
        loginMessage.classList.remove('hidden');
        
        // Set color based on message type
        if (type === 'error') {
            loginMessage.classList.remove('text-green-500');
            loginMessage.classList.add('text-red-500');
        } else {
            loginMessage.classList.remove('text-red-500');
            loginMessage.classList.add('text-green-500');
        }
        
        // Auto-hide message after 3 seconds
        setTimeout(function() {
            loginMessage.classList.add('hidden');
        }, 3000);
    }
    
    // Optional: Add Enter key functionality
    function handleEnterKey(event) {
        if (event.key === 'Enter') {
            signInBtn.click();
        }
    }
    
    // Add enter key listeners to input fields
    usernameInput.addEventListener('keypress', handleEnterKey);
    passwordInput.addEventListener('keypress', handleEnterKey);
    
    // Optional: Add logout functionality (if you want to add a logout button later)
    // You can create this function to return to login screen
    window.logout = function() {
        dashboardSection.classList.add('hidden');
        loginSection.classList.remove('hidden');
    };
});

    