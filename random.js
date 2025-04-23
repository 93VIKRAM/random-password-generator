// Function to generate random password
function generatePassword() {
    const length = 20; // Default password length
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    document.getElementById("password").value = password;
}

// Function to copy password to clipboard
function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    
    // Optional: Add visual feedback
    const copyButton = document.getElementById("copy");
    const originalText = copyButton.innerText;
    copyButton.innerText = "Copied!";
    
    setTimeout(() => {
        copyButton.innerText = originalText;
    }, 1500);
}

// Generate password when page loads
window.onload = generatePassword;