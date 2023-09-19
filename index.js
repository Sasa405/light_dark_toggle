// script.js

const themeToggleCheckbox = document.getElementById("theme-toggle-checkbox");
const themeToggleLabel = document.getElementById("theme-toggle-label");

// Check if the user's preference is stored in localStorage
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggleCheckbox.checked = true;
    themeToggleLabel.textContent = "Dark";
} else {
    themeToggleLabel.textContent = "Light";
}

// Event listener for the theme toggle switch
themeToggleCheckbox.addEventListener("change", function () {
    if (themeToggleCheckbox.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
        themeToggleLabel.textContent = "Dark";
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
        themeToggleLabel.textContent = "Light";
    }
});
