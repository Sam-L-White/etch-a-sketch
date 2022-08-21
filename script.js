function createGrid(){
    for (y = 0; y < 16; y++){

        const container = document.querySelector(".grid-container")
        let row = document.createElement("div")
        row.classList.add(`grid-row-${y}`)
        container.appendChild(row)

        for (x = 0; x < 16; x++){
            const container = document.querySelector(`.grid-row-${y}`);
            let div = document.createElement("div")
            div.classList.add("grid-div")
            
            container.appendChild(div)
        }
    }
    
}

createGrid()