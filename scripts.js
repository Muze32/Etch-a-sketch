const body = document.querySelector("body");
const full_grid = document.querySelector(".full_grid");
const input_button = document.querySelector(".input");
const rainbow = document.querySelector(".rainbow");
const mono = document.querySelector(".mono");
let random_color = false;
create_grid(5);

input_button.addEventListener("click", () => 
{
    let input =  prompt("Enter the size of the grid (Up to 100): ");    

    while (full_grid.firstChild) 
    {
        full_grid.removeChild(full_grid.firstChild);
    }
    create_grid(input);
})

mono.addEventListener("click", () => random_color = false);

rainbow.addEventListener("click", () => random_color = true);

full_grid.addEventListener("mouseover", (event) => 
{
    if (random_color) 
    {
        event.target.style["background-color"] = `rgb(${getRandomColor()} ${getRandomColor()} ${getRandomColor()})`;
    }
    else 
    {
        event.target.style["background-color"] = "red";
    }
})

function create_grid(input) {
    if (input >= 0 && input <= 100) 
        {
            input_button.textContent = `Change size (${input} x ${input})`;
            for(let i = 0; i < input; i++) 
                {
                    const container = document.createElement("div");
                    container.classList.add("container");
                    for (let j = 0; j < input; j++) 
                    {
                        const grid = document.createElement("div");
                        grid.setAttribute("class", "grid");
                        grid.style.height = "50px";
                        grid.style.height = ((full_grid.offsetHeight / input) - 2).toString() + "px";
                        grid.style.width = ((full_grid.offsetWidth / input) - 2).toString() + "px";
                        container.appendChild(grid);
                    }
                    full_grid.appendChild(container);
                }
            
        }
        else 
        {
            alert("Please enter an valid number!");
        }
    
}

function getRandomColor() 
{
    return Math.floor(Math.random() * 256);
}
