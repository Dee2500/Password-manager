const passwords = {};

function checkPasswordStrength() {
    const password = document.getElementById('passwordInput').value;
    const strengthResult = document.getElementById('strengthResult');

    if (password.length < 8) {
        strengthResult.textContent = "Weak: Password must be at least 8 characters long.";
    } else if (!/[a-z]/.test(password)) {
        strengthResult.textContent = "Weak: Password must include at least one lowercase letter.";
    } else if (!/[A-Z]/.test(password)) {
        strengthResult.textContent = "Weak: Password must include at least one uppercase letter.";
    } else if (!/[0-9]/.test(password)) {
        strengthResult.textContent = "Weak: Password must include at least one number.";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        strengthResult.textContent = "Weak: Password must include at least one special character.";
    } else {
        strengthResult.textContent = "Strong: Your password is strong!";
    }
}

function addPassword() {
    const name = document.getElementById('nameInput').value;
    const password = document.getElementById('servicePassword').value;
    const addResult = document.getElementById('addResult');

    if (name && password) {
        passwords[name] = password;
        addResult.textContent = "Password stored successfully!";
    } else {
        addResult.textContent = "Please provide both service name and password.";
    }
}

function getPassword() {
    const name = document.getElementById('retrieveName').value;
    const retrieveResult = document.getElementById('retrieveResult');

    if (name in passwords) {
        retrieveResult.textContent = `Password for ${name}: ${passwords[name]}`;
    } else {
        retrieveResult.textContent = "Password not found.";
    }
}
