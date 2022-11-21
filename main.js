let backgroundColorChange = document.getElementById("colorPickerContainer");
let changeContent = document.getElementById("selectedColorHexCode");

function buttonOne() {
    backgroundColorChange.style.backgroundColor = "#e0e0e0";
    changeContent.textContent = "#e0e0e0"
}

function buttonTwo() {
    backgroundColorChange.style.backgroundColor = "#6fcf97";
    changeContent.textContent = "#6fcf97"
}

function buttonThree() {
    backgroundColorChange.style.backgroundColor = "#56ccf2";
    changeContent.textContent = "#56ccf2"
}

function buttonFour() {
    backgroundColorChange.style.backgroundColor = "#bb6bd9";
    changeContent.textContent = "#bb6bd9"
}
