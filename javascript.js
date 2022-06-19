let sidebar = document.querySelector('#sidebar');
let chooseDimensions = document.createElement('button')
sidebar.appendChild(chooseDimensions)

function genDivs(vert, horiz) {
    let container = document.querySelector('#container');
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
genDivs(8,8);
