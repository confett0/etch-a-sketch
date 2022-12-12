// Etch a Sketch

let grid = document.querySelector('.container');
let numOfSquares = 60;


function createGrid(num) {
    for (let i = 1; i <= num ** 2; i++) {
        let square = document.createElement('div');
        square.className = 'square';
        grid.appendChild(square);
        grid.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

    }
}

createGrid(numOfSquares);

function randomColor() {
    let color = "#";
    let hex = Math.floor(Math.random() * 16777215).toString(16);
    return color += hex;

}

let squareDivs = document.querySelectorAll('.square');
squareDivs.forEach(box => {
    box.addEventListener("mouseover", function() {
        return box.style.backgroundColor = randomColor();
    })
})

function clearDiv() {
    squareDivs.forEach(box => {
           return box.style.backgroundColor = "white";
        })
}