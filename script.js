

const canvas = document.getElementById("canvas");
const canvasWidth = canvas.getBoundingClientRect().width;
const paintModeButton = document.getElementById("paintmode-button")
const gridsizeButton = document.getElementById("gridsize-button")
let pixelNumber = 16;
let paintMode = "color"; 
let color = "black";


console.log(canvasWidth);
console.log("hello")

gridsizeButton.addEventListener("click", () => {
    console.log("click");
    let i = 0;
    while (i < 3) {
        let input = window.prompt("Enter Gridsize");
        let num = parseInt(input);
        if (Number.isInteger(num) && num <= 100) {
            pixelNumber = num;
            break;
        };
        i++;
    };
    console.log("pixelnumer:" + pixelNumber)
    clearGrid();
    createGrid(pixelNumber);

})

paintModeButton.addEventListener("click", () => {
    paintMode = "rainbow";
})

function getRandomColor() {
    return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
}

function clearGrid() {
    canvas.replaceChildren();
}

function createGrid(pixelNumber) {
    let pixelSize = `${canvasWidth / pixelNumber}px`
    for (let i = 0; i < pixelNumber * pixelNumber; i++) {
        const div = document.createElement("div");
        div.style.backgroundColor = "white";
        div.style.width = pixelSize;
        div.style.height = pixelSize;
        div.classList.add("pixel");
        canvas.appendChild(div);
    }
}



createGrid(16)

canvas.addEventListener("mouseover", (e) => {
    let target = e.target;
    if (paintMode ===  "color") {
        target.style.backgroundColor = color;
    } else if (paintMode ===  "rainbow") {
        target.style.backgroundColor = getRandomColor();
    }
})

