function simpleHash(str) {
    let hash = 0;
    for (let char of str) {
        hash += char.charCodeAt(0);
    }
    return hash;
}
class UserStore {
    static users = [
        {
            username: "Geofranklyn",
            password: "Password",
            passwordHash: simpleHash("Password")
        }
    ];
}
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const result = document.getElementById("result");
    const user = UserStore.users.find(u => u.username === username);
    const pos = UserStore.users.indexOf(user);
    if (!user) {
        result.textContent = "User not found";
        return;
    }
    const inputHash = simpleHash(password);
    if (inputHash === user.passwordHash) {
        result.textContent = `Login successful for ${user.username}. The Hash of the password is ${user.passwordHash}`;
    } else {
        result.textContent = "Incorrect password";
    }
}