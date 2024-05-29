const body = document.querySelector("body");
const full_grid = document.querySelector(".full_grid");
const input_button = document.querySelector(".input");
const rainbow = document.querySelector(".rainbow");
const mono = document.querySelector(".mono");
const shading = document.querySelector(".shading");
let random_color = false;
let is_toggled = false;
let i = 0;
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

shading.addEventListener("click", () => is_toggled = !is_toggled);


full_grid.addEventListener("mouseover", (event) => 
{
    if (random_color) event.target.style["background-color"] = `rgb(${getRandomColor()} ${getRandomColor()} ${getRandomColor()})`;
    
    else event.target.style["background-color"] = "black";

    if (is_toggled) 
    {
        let opacity = parseFloat(event.target.style.opacity);
        if (isNaN(opacity)) {
            opacity = 0.1; // Initial opacity if not set
        }
        if (opacity < 1) 
        {
            event.target.style.opacity = opacity + 0.1;
        }
    }
    else {
        event.target.style.opacity = 1;
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
