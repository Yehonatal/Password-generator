// Select elements
const slider = document.querySelector("#range");
const lengthDisplay = document.querySelector(".length");
const checkboxesContainer = document.querySelector(".checkboxes");
const generatorBtn = document.querySelector("#generator");
const output = document.querySelector("#output");
const copyBtn = document.querySelector("#copy-btn");
const passGenerated = document.querySelector(".pass-generated");
const strength = document.querySelector("#strength");
const bars = document.querySelector(".bars");
const tagOne = document.querySelector(".tag-1");

// Define variables
let password;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
const lowerCase = "abcdefghijklmnopqrstuvxyz";
const numbers = "0123456789";
const specialChars = "£$&()*+[]@#^-_!?";

// Add event listeners
slider.addEventListener("input", updateLength);
checkboxesContainer.addEventListener("change", updateSelectedTypes);
generatorBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

// Define functions
function updateLength(e) {
    lengthDisplay.innerText = e.target.value;
}

function updateSelectedTypes(e) {
    const selectedTypes = Array.from(
        e.target.querySelectorAll('input[type="checkbox"]:checked')
    ).map((checkbox) => checkbox.id);
}

function generatePassword() {
    const selectedTypes = Array.from(
        checkboxesContainer.querySelectorAll('input[type="checkbox"]:checked')
    ).map((checkbox) => checkbox.id);
    const length = lengthDisplay.innerText;
    password = passGenerated.innerText;
    console.log(selectedTypes, length);

    getStrength(password);
}

function getStrength(password) {
    let score = zxcvbn(password).score;
    console.log(password);

    strength.innerText =
        score <= 1
            ? "TOO-WEAK"
            : score === 2
            ? "WEAK"
            : score === 3
            ? "MEDIUM"
            : "STRONG";
    bars.className = `bars flex ${
        score <= 1
            ? "too-weak"
            : score === 2
            ? "weak"
            : score === 3
            ? "medium"
            : "strong"
    }`;
}

function copyPassword() {
    password = passGenerated.innerText;

    navigator.clipboard
        .writeText(password)
        .then(() => {
            tagOne.innerText = "COPIED! ";
            setTimeout(() => {
                tagOne.innerText = "";
            }, 1000);
        })
        .catch((err) => {
            console.error("Failed to copy: ", err);
        });
}
