function updateTitle() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    document.getElementById("heading").innerText
= `Current Time: ${timeString}`;
}
setInterval(updateTitle, 1000);

let themeButton = document.getElementById("themeToggle");

// Function to toggle dark mode
themeButton.addEventListener("click", function() {
 document.body.classList.toggle("dark-mode");
 localStorage.setItem("theme",
document.body.classList.contains("dark-mode") ? "dark" : "light");
});
 
// Apply saved theme on page load
if (localStorage.getItem("theme") === "dark")
{
 document.body.classList.add("dark-mode");
}