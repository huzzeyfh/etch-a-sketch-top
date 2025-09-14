//HTML variables
const button = document.querySelector('.button');
const container = document.querySelector('.container');

//Hover
container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('grids')) {
        e.target.style.backgroundColor = 'blue';
    }
});

container.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('grids')) {
        e.target.style.backgroundColor = '';
    }
});

//Add the grids
for (i = 0; i < 256; i++) {
    const addDivs = document.createElement('div');
    addDivs.className = 'grids';
    container.appendChild(addDivs);
}

//Button
button.addEventListener('click', function promptSize() {
    //Remove grids
    const removeGrids = document.querySelectorAll('.grids');
    removeGrids.forEach((removeGrid) => {
        container.removeChild(removeGrid);
    });

    //Desired grid-size
    const gridValue = parseInt(prompt('Input your desired grid-size (Max : 100)', ''), 10);

    if (gridValue >= 1 && gridValue < 100) {
        //Add grids
        for (i = 0; i < gridValue * gridValue; i++) {
            const addDivs = document.createElement('div');
            addDivs.className = 'grids';
            addDivs.style.height = `${640 / gridValue}px`;
            addDivs.style.width = `${640 / gridValue}px`;
            container.appendChild(addDivs);
        }
    } else if (gridValue >= 100) {
        alert('Maximum 100!');
    } else {
        alert('Please input number');
    }
});