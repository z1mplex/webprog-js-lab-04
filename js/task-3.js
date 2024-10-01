function generatePassword(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    
    return password;
}

function checkPassword(password, confirmPassword) {
    return password === confirmPassword ? "Passwords match" : "Passwords do not match";
}

function meetsRequirements(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    
    return hasUpperCase && hasLowerCase && hasDigit;
}

function generateAndCheckPassword(length = 8) {
    let passwordChoice;
    let userPassword;

    const userChoice = confirm("Would you like to enter your own password? Click 'OK' for yes, 'Cancel' for generated password.");

    if (userChoice) {
        userPassword = prompt("Please enter your password:");
    } else {
        userPassword = generatePassword(length);
        const showPassword = confirm("Would you like to see the generated password?");
        if (showPassword) {
            alert(`Generated password: ${userPassword}`);
        }
    }

    while (!meetsRequirements(userPassword)) {
        alert("Password does not meet the requirements: it must contain at least one uppercase letter, one lowercase letter, and one number.");
        const retryChoice = confirm("Would you like to enter a new password yourself? Click 'OK' for yes, 'Cancel' for generated password.");
        if (retryChoice) {
            userPassword = prompt("Please enter your new password:");
        } else {
            userPassword = generatePassword(length);
            const showPassword = confirm("Would you like to see the new generated password?");
            if (showPassword) {
                alert(`Generated password: ${userPassword}`);
            }
        }
    }

    const confirmPassword = prompt("Please confirm your password:");
    const result = checkPassword(userPassword, confirmPassword);
    alert(result);
}

generateAndCheckPassword(8);
