

const canvas = document.getElementById("canvas");

function prepareInitialGrid() {
    for (let i = 0; i < 16*16; i++) {
        const div = document.createElement("div");
        div.style.backgroundColor = "white";
        div.style.width = "20px";
        div.style.height = "20px";
        div.classList.add("pixel");
        canvas.appendChild(div);
    }
}

prepareInitialGrid()

