//HTML variables
const container = document.querySelector('.container');

//Add the grids
for (i = 0; i < 16; i++) {
    const addDivs = document.createElement('div');
    addDivs.className = "grids";
    addDivs.style.padding = "16px";
    container.appendChild(addDivs);
}

