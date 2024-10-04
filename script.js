

const canvas = document.getElementById("canvas");
const canvasWidth = canvas.getBoundingClientRect().width;
const button = document.getElementById("gridsize-button")
let pixelNumber = 16;
let paintMode = "default"; 
let color = "black";


console.log(canvasWidth);
console.log("hello")

button.addEventListener("click", () => {
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
    target.style.backgroundColor = color;
})

