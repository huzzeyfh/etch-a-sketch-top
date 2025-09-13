//HTML variables
const button = document.querySelector('.button');
const container = document.querySelector('.container');


//variables
let gridValue;
let i = gridValue;

//Add the grids
for (i = 0; i < 256; i++) {
    const addDivs = document.createElement('div');
    addDivs.className = 'grids';
    container.appendChild(addDivs);
}

//Hover
const grids = document.querySelectorAll('.grids');
grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = 'blue';
    });

    grid.addEventListener('mouseout', () => {
        grid.style.backgroundColor = '';
    })
});

//Button
button.addEventListener('click', function promptSize() {
    //Remove grids
    grids.forEach((grid) => {
        container.removeChild(grid);
    });

    //Desired grid-size
    const gridValue = prompt('Input your desired grid-size (Max : 100)', '');

    if (gridValue >= 1 && gridValue < 100) {
        return;
    } else if (gridValue >= 100) {
        alert('Maximum 100!');
    } else {
        alert('Please input number');
    }

    //Add grids
});
