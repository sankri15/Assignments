function createDiv(width, height, text, color) {
    const div = document.createElement("div");

    div.classList.add("box");

    div.style.width = width + "px";
    div.style.height = height + "px";

    // ✅ STATIC COLOR (NO RANDOM)
    div.style.backgroundColor = color;

    div.textContent = text;

    document.getElementById("container").appendChild(div);
}

// Example calls with fixed colors
createDiv(200, 80, "First Div", "red");
createDiv(250, 100, "Second Div", "blue");
createDiv(300, 120, "Third Div", "green");
createDiv(180, 90, "Fourth Div", "purple");
