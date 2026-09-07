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