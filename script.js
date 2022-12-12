// Etch a Sketch

const grid = document.querySelector('.container');
const black = document.getElementById('black');
const rainbow = document.getElementById('rainbow');
let blackMode = true;
let rainbowMode;
let numOfSquares = 60;

black.addEventListener('click', function()
{
    rainbowMode = false;
    return blackMode = true;
}
)

rainbow.addEventListener('click', function()
{   
    blackMode = false;
    return rainbowMode = true;
}
)


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
        if (rainbowMode) {
        return box.style.backgroundColor = randomColor();
    } else {
        return box.style.backgroundColor = 'black';
    }
    })
})

// Clear grid

function clearDiv() {
    squareDivs.forEach(box => {
           return box.style.backgroundColor = "white";
        })
}

document.getElementById('clear').addEventListener('click',clearDiv);