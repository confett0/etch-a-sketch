// Etch a Sketch

let grid = document.querySelector('.container');
let numOfSquares = 256;

// Create divs


function createGrid(num) {
    for (let i = 1; i <= num; i++) {
        let square = document.createElement('div');
        square.className = 'square';
        grid.appendChild(square);
    }
}

createGrid(numOfSquares);