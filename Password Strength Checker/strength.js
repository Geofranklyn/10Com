const input = document.getElementById("passwordInput");
const result = document.getElementById("strengthResult");

input.addEventListener("input", () => {
    const password = input.value;
    result.textContent = checkStrength(password);
});

function checkStrength(password) {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) return "Weak password";
    if (score <= 4) return "Moderate password";
    return "Strong password";
}