const container = document.querySelector(".container");
const btn = document.querySelector("button");

let userInput = 64;
let promptInput = "64";

const genNewGrid = () => {
  userInput = parseInt(promptInput, 10);
  for (let i = 0; i < userInput * userInput; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
  }
};

const changeBGColor = () => {
  container.querySelectorAll("div").forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "#000";
    });
  });
};

const getUserInput = () => {
  promptInput = prompt("How many squares do you want per side?", "64");
  while (!/^[0-9]+$/.test(promptInput)) {
    alert("Please enter a number");
    promptInput = prompt("How many squares do you want per side?", "64");
  }
};

const adjustNewGrid = () => {
  const newFlexBasis = 100 / userInput;
  container.querySelectorAll("div").forEach((div) => {
    div.style.flexBasis = `${newFlexBasis}%`;
  });
};

btn.addEventListener("click", () => {
  getUserInput();
  removeCurrentGrid();
  genNewGrid();
  adjustNewGrid();
  changeBGColor();
});

function removeCurrentGrid() {
  while (container.firstChild) {
    container.firstChild.remove();
  }
}

genNewGrid();
adjustNewGrid();
changeBGColor();