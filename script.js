const button = document.getElementById("theme-toggle");

let inverted = localStorage.getItem("inverted") !== "false";

function updateTheme() {
    document.documentElement.classList.toggle("dark", inverted);
    document.body.classList.toggle("dark", inverted);
}

button.addEventListener("click", () => {
    inverted = !inverted;
    localStorage.setItem("inverted", inverted);
    updateTheme();
});

updateTheme();

const codeInput = document.getElementById("code-input");

const codes = {
    MEMORE: "codes/memore/",
    IMEARL: "codes/imearl/"
};

const endingSound = new Audio("assets/ending.ogg");

if (codeInput) {
    codeInput.addEventListener("input", () => {
        codeInput.value = codeInput.value
            .replace(/[^a-zA-Z]/g, "")
            .toUpperCase();
    });

    codeInput.addEventListener("keydown", event => {
        if (event.key !== "Enter") return;

        const code = codeInput.value;

        if (codes[code]) {
            window.location.href = codes[code];
            return;
        }

        if (code === "THEEND") {
            endingSound.play();
        }
    });
}