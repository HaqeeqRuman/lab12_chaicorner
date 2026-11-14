// Chai Corner - Lab 11 JavaScript practice

// Display a welcome message when the page loads.
window.addEventListener("load", function () {
    console.log("Welcome to Chai Corner!");
});

// Demonstrate a button interaction with a simple alert.
const exploreButton = document.querySelector(".hero .button");

if (exploreButton) {
    exploreButton.addEventListener("click", function () {
        console.log("The visitor selected Explore Our Chai.");
    });
}

// Demonstration contact form: this does not send or store information.
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("visitorName");
        const formMessage = document.getElementById("formMessage");
        const visitorName = nameInput.value.trim();

        if (visitorName === "") {
            formMessage.textContent = "Please enter your name.";
            return;
        }

        formMessage.textContent =
            "Thank you, " + visitorName + "! This is a demo form; your message was not sent.";

        contactForm.reset();
    });
}
