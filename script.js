const container = document.querySelector(".container");
const btn = document.querySelector("button");

let userInput = 16;

for (let i = 0; i < userInput * userInput; i++) {
  const div = document.createElement("div");
  container.appendChild(div);
}

container.querySelectorAll("div").forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.setAttribute("style", "background: black;");
  });
});



const getInput = () => {
  let promptInput = prompt("How many squares do you want per side?", "16");
  while (!/^[0-9]+$/.test(promptInput)) {
    alert("Please enter a number");
    promptInput = prompt("How many squares do you want per side?", "16");
  }
};

btn.addEventListener("click", () => {
  getInput();
});
