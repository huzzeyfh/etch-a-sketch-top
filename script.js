//HTML variables
const container = document.querySelector('.container');

//container styles
container.classList.add('container');

//Add the grids
for (i = 0; i < 256; i++) {
    const addDivs = document.createElement('div');
    addDivs.className = 'grids';
    container.appendChild(addDivs);
}

//Hover
const grid = document.querySelectorAll('.grids');
grid.style.backgroundColor = 'blue';
// console.log(grid);
// grid.addEventListener('mouseover', () => {
//     grid.style.backgroundColor = 'blue';
// });

// grid.addEventListener('mouseout', () => {
//     grid.style.backgroundColor = '';
// });