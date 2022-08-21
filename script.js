function createGrid(inputSize = 32){
    
    for (y = 0; y < inputSize; y++){

        const container = document.querySelector(".grid-container")
        let row = document.createElement("div")
        row.classList.add(`grid-row-${y}`)
        container.appendChild(row)

        for (x = 0; x < inputSize; x++){

            const container = document.querySelector(`.grid-row-${y}`);
            let div = document.createElement("div")
            div.classList.add("grid-div")
            container.appendChild(div)
        }
    }

    divs = document.querySelectorAll(".grid-div")
    divs.forEach(div => div.addEventListener('mouseover', function(e){
    e.target.style.background = "black"
    }))   
}


buttonSize = document.querySelector(".button-size")
buttonSize.addEventListener('click', function(){
    inputSize = prompt("Please enter a grid size - e.g. 48 will create a 48x48 grid. Maximum number is 100")
    if (inputSize > 100){
        alert("Maximum value is 100")
        return;
    }
    const container = document.querySelector('.grid-container');
    removeAllChildNodes(container);
    createGrid(inputSize)
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

createGrid()