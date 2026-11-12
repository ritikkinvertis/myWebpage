
function showMessage() {
    alert("Welcome! Let's create something amazing.");
}

function toggleMenu() {
    document.getElementById("navbar")
        .classList.toggle("active");
}

function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name.trim() === "" ||
        email.trim() === "" ||
        message.trim() === "") {
        alert("Please fill all fields!");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email!");
        return;
    }

    document.getElementById("result").innerText =
        "Thank you " + name + "! Your message is ready.";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
