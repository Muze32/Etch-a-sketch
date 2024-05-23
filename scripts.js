const body = document.querySelector("body");
const full_grid = document.querySelector(".full_grid");

for(let i = 0; i < 16; i++) {
    const container = document.createElement("div");
    container.classList.add("container");
    for (let j = 0; j < 16; j++) {
        const grid = document.createElement("div");
        grid.setAttribute("class", "grid");
        grid.textContent = "test";
        container.appendChild(grid);
    }
    full_grid.appendChild(container);
}


full_grid.addEventListener("mouseover", (event) => {
    event.target.setAttribute("style", "background-color: black");
})
