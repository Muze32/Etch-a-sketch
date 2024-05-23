const body = document.querySelector("body");
const full_grid = document.querySelector(".full_grid");
const input_button = document.querySelector(".input");

input_button.addEventListener("click", () => 
{
    let input =  prompt("Enter the size of the grid (Up to 100): ");    

    while (full_grid.firstChild) 
    {
        full_grid.removeChild(full_grid.firstChild);
    }

    for(let i = 0; i < input; i++) 
    {
        const container = document.createElement("div");
        container.classList.add("container");
        for (let j = 0; j < input; j++) 
        {
            const grid = document.createElement("div");
            grid.setAttribute("class", "grid");
            container.appendChild(grid);
        }
        full_grid.appendChild(container);
    }
})
console.log(full_grid.offsetWidth)

full_grid.addEventListener("mouseover", (event) => 
{
    event.target.setAttribute("style", "background-color: black");
})
