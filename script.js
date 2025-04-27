const container = document.querySelector(".container");
const button = document.querySelector("button");

const MAX_GRID_ITEMS = 100;
let userInput = 64;

container.addEventListener("mouseover", changeBGColor);
button.addEventListener("click", refreshDisplay);

function createNewGrid() {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < userInput * userInput; i++) {
    const div = document.createElement("div");
    div.style.flexBasis = `${MAX_GRID_ITEMS / userInput}%`;
    div.dataset.empty = true;
    div.dataset.colored = false;
    div.classList.add("grid-item");
    fragment.appendChild(div);
  }

  container.appendChild(fragment);
}

function changeBGColor(e) {
  const target = e.target;
  if (target.className !== "grid-item") return;
  if (target.dataset.colored === "true") return;
  const bgColor = getComputedStyle(target).backgroundColor;

  if (target.dataset.empty === "false") {
    const rgba = bgColor.split(",");
    const opacity = Number(rgba[3].replace(")", "").trim());
    if (opacity + 0.1 === 1) target.dataset.colored = true;

    rgba[3] = `${opacity + 0.1})`;
    target.style.backgroundColor = rgba.join(",");
    return;
  }

  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.1)`;
  target.dataset.empty = false;
}

function getUserInput() {
  const input = Number(
    prompt(`How many squares do you want per side?\n max: ${MAX_GRID_ITEMS}`, "64")
  );

  if (input < 1 || input > MAX_GRID_ITEMS) {
    alert(`Please enter a number between 1 & ${MAX_GRID_ITEMS}`);
    return;
  }

  userInput = input;
}

function refreshDisplay() {
  getUserInput();
  removeCurrentGrid();
  createNewGrid();
  button.textContent = `${userInput}x${userInput}`;
}

function removeCurrentGrid() {
  while (container.firstChild) {
    container.firstChild.remove();
  }
}

createNewGrid();
