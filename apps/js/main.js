const slider = document.querySelector("#range");
const lengthDisplay = document.querySelector(".length");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const checkboxesContainer = document.querySelector(".checkboxes");
const generatorBtn = document.querySelector("#generator");
const output = document.querySelector("#output");
const copyBtn = document.querySelector("#copy-btn");
const passGenerated = document.querySelector(".pass-generated");

slider.addEventListener("change", (e) => {
    lengthDisplay.innerText = e.target.value;
});

checkboxesContainer.addEventListener("change", (e) => {
    const selectedTypes = Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.id);
    console.log(selectedTypes);
});

function generate({ selectedTypes, length }) {
    console.log(selectedTypes, length);
}

generatorBtn.addEventListener("click", (e) => {
    const selectedTypes = Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.id);
    const length = lengthDisplay.innerText;
    generate({ selectedTypes, length });
});

// COPY Generated Password to clipboard
copyBtn.addEventListener("click", (e) => {
    const password = passGenerated.innerText;

    navigator.clipboard
        .writeText(password)
        .then(() => {
            console.log("Copied: ", password);
        })
        .catch((err) => {
            console.error("Failed to copy: ", err);
        });
});
