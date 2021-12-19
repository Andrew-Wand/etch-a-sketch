const container = document.getElementById('container');
const clearBtn = document.getElementById('clear-button');
const changeSizeBtn = document.getElementById('size-button');
const defaultBtn = document.getElementById('default-button');
const sizePrompt = document.getElementById('sizePrompt');


//Make rows for etch-a-sketch
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
      sizePrompt.innerHTML = `${rows} x ${cols}`;
      cell.addEventListener('mouseover', function (){
        cell.style.backgroundColor = '#000';
      });
    };
  

  };
  
makeRows(16, 16);

//Event listeners

clearBtn.addEventListener('click', function () {
  const divs = document.querySelectorAll("div.container");
  divs.forEach((divs) => {
      divs.innerHTML = '';   
});

if (size) {
  makeRows(size, size)
} else {
  makeRows(16, 16);
}
  
});

let size = '';

changeSizeBtn.addEventListener('click', function () {
  size = prompt('How many?');
   if (size > 100) {
    const divs = document.querySelectorAll("div.container");
    divs.forEach((divs) => {
        divs.innerHTML = '';    
});
alert('Too big!');
} else {
    if (size <= 100) {
    const divs = document.querySelectorAll("div.container");
    divs.forEach((divs) => {
        divs.innerHTML = '';    
});
        makeRows(size, size);
    }
    
}
if (size === null) {
  makeRows(16,16);
}
});


defaultBtn.addEventListener('click', function () {
  const divs = document.querySelectorAll("div.container");
  divs.forEach((divs) => {
      divs.innerHTML = '';   
});
  size = '16';
  makeRows(16, 16);
});



