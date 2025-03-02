const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numberEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("getBtn");

const copyIcon = document.getElementById("copyIcon");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
});

generateBtn.addEventListener("click", () => {
    passBox.value = generatePassword(); //Call the function
});

function generatePassword() {
    const lenght = inputSlider.value;
    let characters = "";
    let password = "";

    characters += lowercaseEl.checked ? lowercaseLetters : "";
    characters += uppercaseEl.checked ? uppercaseLetters : "";
    characters += numberEl.checked ? numbers : "";
    characters += symbolsEl.checked ? symbols : "";

    for (let i = 0; i < lenght; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
        console.log(password);
    }

    return password
}

copyIcon.addEventListener("click", () => {
    if (passBox.value != "" || passBox.value.lenght >= 10) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerHTML = "check";

        setTimeout(() => {
            copyIcon.innerHTML="content_copy";
        }, 3000);
    }
});