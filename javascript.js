//let sidebar = document.querySelector('#sidebar');

let chooseDimensions = document.querySelector('#chooseDimension');
chooseDimensions.addEventListener("click", dimensions);

document.querySelectorAll(gridsquare);
gridsquare.addEventListener("mouseover", darkenSquare);


let reset = document.createElement('button');
reset.className = 'button';
sidebar.appendChild(reset);


function dimensions () {
    let x = prompt ('choose x: ');
    while (x>100 || x<0) {
        x = prompt('choose x (must be between 0 and 100): ')
    }
    let y = prompt ('choose y: ');
    while (x>100 || x<0) {
        y = prompt('choose y (must be between 0 and 100): ')
    }
    genDivs(x,y);
}

function genDivs(vert, horiz) {
    let container = document.querySelector('#container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < vert; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < horiz; j++) {
            let cell = document.createElement('div');
            cell.className = 'gridsquare';
            cell.innerText = i * vert + j +1;
            row.appendChild(cell);
        }
    container.appendChild(row);
    }
}

function darkenSquare() {
    document.gridsquare.backgroundColor = 888888
}


