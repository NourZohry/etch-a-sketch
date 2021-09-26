function createColorPalette() {
    let colorList = ["red", "orange", "yellow", 
    "lime", "green", "teal", 
    "aqua", "royalblue", "navy",
    "lightpink", "fuchsia", "purple", 
    "brown", "black", "gray"]

    colorList.forEach(addToColorPalette);
    /*
    document.querySelectorAll(".color").forEach(element => {
        element.addEventListener("click", () => { changeDrawingColor(element.dataset.color); }) 
    });
    */
}

function addToColorPalette(color) {
    let colorDiv = document.createElement("div");
    colorDiv.classList.add("color");
    colorDiv.dataset.color = color;
    colorDiv.style.backgroundColor = color;
    colorDiv.addEventListener("click", () => { changeDrawingColor(colorDiv.dataset.color); 
        document.getElementById("selected-color").style.backgroundColor = color; });
    document.getElementById("color-side-bar").appendChild(colorDiv);

}

function resetColors() {
    console.log("hi");
    document.querySelectorAll(".grid").forEach(element => {
        element.style.backgroundColor = "white";
    });
}

function deleteGrid() {
    document.querySelectorAll(".grid").forEach(element => {
        element.remove();
    });
}

function changeDrawingColor(newColor) {
    drawingColor = newColor;
}

function changeGridColor(gridId) {
    document.getElementById(`grid-${gridId}`).style.backgroundColor = drawingColor;
}

function createGrid(size) {
    let gridList = document.getElementById("grid-list");
    gridList.style.gridTemplateColumns = "repeat(" + size + ", 1fr)"
    let div;
    for (let i=0; i < size**2; i++) {
        div = document.createElement("div");
        div.classList.add("grid");
        div.id = "grid-" + i;
        div.addEventListener("mouseover", () => { changeGridColor(i) });

        gridList.appendChild(div);
    }

    gridList.appendChild(div);

}

let drawingColor="black";

createGrid(16);
createColorPalette();

let resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetColors);
let rangeSlider = document.getElementById("range-slider");
rangeSlider.addEventListener("change", () => { deleteGrid(); createGrid(rangeSlider.value);});