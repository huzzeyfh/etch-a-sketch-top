//HTML variables
const button = document.querySelector('.button');
const container = document.querySelector('.container');

//Hover
container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('grids')) {
        if (e.target.style.backgroundColor) {
            //Current opacity
            let currentOpacity = parseFloat(e.target.style.opacity) || 0;
            
            //Increment by 0.1, max = 1
            let newOpacity = Math.min(currentOpacity + 0.1, 1);

            e.target.style.opacity = newOpacity;
        } else {
            e.target.style.backgroundColor = getRandomColours();
            e.target.style.opacity = '0.1';
        }
    } 
});

// container.addEventListener('mouseout', (e) => {
//     if (e.target.classList.contains('grids')) {
//         e.target.style.backgroundColor = '';
//     }
// });

//Get random colours
function getRandomColours() {
    const colours = ['blue', 'purple', 'red', 'yellow', 'green'];
    const randomColours = Math.floor(Math.random() * colours.length);
    return colours[randomColours];
}

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