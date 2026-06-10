const text = document.getElementById("text-container");
const colorBox = document.getElementById("colorbox");
const colorBtn = document.getElementById("colorchange");
const fontSize = document.getElementById("fontsize");
const italicBtn = document.getElementById("italic");
const underlineBtn = document.getElementById("underline");
const boldBtn = document.getElementById("bold");
const fontList = document.getElementById("list");
const getStyleBtn = document.getElementById("getstyle");
const cssProps = document.getElementById("css-props");

// Change color
colorBtn.addEventListener("click", function () {
    text.style.color = colorBox.value;
});

// Change font size
fontSize.addEventListener("input", function () {
    text.style.fontSize = fontSize.value + "px";
});

// Toggle Italic
italicBtn.addEventListener("click", function () {
    text.style.fontStyle =
        text.style.fontStyle === "italic" ? "normal" : "italic";
});

// Toggle Underline
underlineBtn.addEventListener("click", function () {
    text.style.textDecoration =
        text.style.textDecoration === "underline"
            ? "none"
            : "underline";
});

// Toggle Bold
boldBtn.addEventListener("click", function () {
    text.style.fontWeight =
        text.style.fontWeight === "bold"
            ? "normal"
            : "bold";
});

// Change Font Family
fontList.addEventListener("change", function () {
    text.style.fontFamily = fontList.value;
});

// Show CSS Properties
getStyleBtn.addEventListener("click", function () {
    cssProps.textContent =
        "color: " + (text.style.color || "black") + "; " +
        "font-size: " + (text.style.fontSize || "55px") + "; " +
        "font-family: " + (text.style.fontFamily || "sans-serif") + "; " +
        "text-decoration: " + (text.style.textDecoration || "none") + "; " +
        "font-style: " + (text.style.fontStyle || "normal") + "; " +
        "font-weight: " + (text.style.fontWeight || "normal") + ";";
});