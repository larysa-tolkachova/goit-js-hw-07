const inputName = document.querySelector("input#name-input");
const outputName = document.querySelector("span#name-output");

inputName.addEventListener("input", () => {
    outputName.textContent = inputName.value.trim() || "Anonymous";
});

inputName.classList.add("input-style");

