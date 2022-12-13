// Etch a Sketch

const grid = document.querySelector('.container');
const black = document.getElementById('black');
const rainbow = document.getElementById('rainbow');
let square;
let squares;
let blackMode = true;
let rainbowMode;

black.addEventListener('click', function () {
    rainbowMode = false;
    return blackMode = true;
})

rainbow.addEventListener('click', function () {
    blackMode = false;
    return rainbowMode = true;
})

function createGrid(num) {
    for (let i = 1; i <= num ** 2; i++) {
        square = document.createElement('div');
        square.className = 'square';
        grid.appendChild(square);
        grid.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    }
}

createGrid(32);

function draw() {
squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener("mouseover", function() {
        if (rainbowMode) {
        return square.style.backgroundColor = randomColor();
    } else {
        return square.style.backgroundColor = 'black';
    }
    })
})}

draw();

function resetGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

let sizeButtons = document.querySelectorAll('.size');
sizeButtons.forEach(sizeButton => {
    sizeButton.addEventListener("click", function () {
        if (sizeButton.classList.contains('small')) {
            resetGrid()
            //blackMode = true;
            createGrid(64);
            draw();
        } else if (sizeButton.classList.contains('medium')) {
            resetGrid();
            //blackMode = true;
            createGrid(32);
            draw();
        } else if (sizeButton.classList.contains('big')) {
            resetGrid();
            //blackMode = true;
            createGrid(16);
            draw();
        }
    })
})

function randomColor() {
    let color = "#";
    let hex = Math.floor(Math.random() * 16777215).toString(16);
    return color += hex;

}

document.getElementById('clear').addEventListener('click', clearDiv);

function clearDiv() {
    squares.forEach(square => {
        return square.style.backgroundColor = "white";
    })}