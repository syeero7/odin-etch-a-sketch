const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  container.appendChild(div);
}

container.querySelectorAll("div").forEach(div => {
    div.addEventListener("mouseover", () => {
  div.setAttribute("style", "background: black;");
})
});
