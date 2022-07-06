const etchArea = document.querySelector("#etchArea");
const changeSizeButton = document.querySelector("#changeSizeButton");
let gridSize = 16;
makeGrid(gridSize);

changeSizeButton.addEventListener("click", () => {
  //  removeGrid(gridSize);
    gridSize = prompt("Enter a size:", 16);
    if (gridSize < 1) gridSize = 16;
    if (gridSize > 100) gridSize = 16;
   while (etchArea.firstChild) {
        etchArea.removeChild(etchArea.firstChild);
    }
    makeGrid(gridSize);
});

function createRow(i) {
    let rowID = document.createElement("div");
    rowID.className = "etchRow";
    //rowID.textContent = i;
    rowID.id = "row " + i;
    return rowID;
}

function createBox(j) {
    let boxID = document.createElement("div");
    boxID.className = "etchBox";
   // boxID.textContent = j;
    boxID.id = "col " + j;
    boxID.addEventListener("mouseover", () => {
        boxID.setAttribute("style", "background-color: black;");
    });
    return boxID;
}

function makeGrid(size) {
for (i = 0; i < size; i++) {
    etchArea.appendChild(createRow(i));
    currentRow = document.getElementById("row " + i)
    for (j = 0; j < size; j++) {
        currentRow.appendChild(createBox(j));
    }
}
}
/*const divs = document.querySelectorAll("div");

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.setAttribute = "style", "background-color = black;";
    })
});*/