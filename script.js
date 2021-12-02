
const resetBtn = document.getElementById('reset-button');
const container = document.getElementById('container');







let cell = document.createElement("div");
let size = prompt('How many?');


function makeRows(rows, cols) {
   
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseover", function bgChange() {
            
            cell.style.backgroundColor = "#000";
            
        });
    };
   
};

makeRows(size, size);












function sizePrompt() {
    let gameSize = prompt('how many?');

    

    if (gameSize > 100) {
        const divs = document.querySelectorAll("div");
        divs.forEach((divs) => {
            divs.innerHTML = '';    
  });
  alert('Too big!');
    } else {
        makeRows(gameSize, gameSize);
    }
    
}
    





resetBtn.addEventListener('click', resetGame);
function resetGame() {
    const allDivs = document.querySelectorAll("div");
        allDivs.forEach((allDivs) => {
            allDivs.style.backgroundColor = "rgba(255, 255, 255, 0)";
            allDivs.innerHTML = '';    
  });

  sizePrompt();
  

  

}



