const passwordVisibilityButton = document.querySelector("form .password-visibility");

const emailInput = document.querySelector("form input[type=text]");
const passwordInput = document.querySelector("form input[type=password]");

passwordInput.addEventListener("input", event => {
    const value = event.target.value;
    passwordVisibilityButton.disabled = value === "";
});

passwordVisibilityButton.addEventListener("click", () => {
    // const isPasswordType = passwordInput.type === "password";

    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    passwordVisibilityButton.innerText = passwordInput.type === "password" ? "Show" : "Hide";
});

const form = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault();

    // const email = emailInput.value;
    // const password = passwordInput.value;

    // console.log(form.elements);

    console.log({
        email: form.elements["email"].value,
        password: form.elements["password"].value
    })
})