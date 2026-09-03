function updateTitle() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    document.getElementById("heading").innerText
= `Current Time: ${timeString}`;
}
setInterval(updateTitle, 1000);