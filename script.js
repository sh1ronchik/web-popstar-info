document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    themeToggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-theme");

        if (body.classList.contains("dark-theme")) {
            localStorage.setItem("dark-theme", "enabled");
        } else {
            localStorage.removeItem("dark-theme");
        }
    });
});
