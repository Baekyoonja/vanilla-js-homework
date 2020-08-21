// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const body = document.querySelector("body");
const colors = ["#9980FA", "#FFC312", "#54a0ff"];

function resizeHandler() {
  const width = window.innerWidth; //
  if (width >= 700 && width <= 850) {
    body.style.backgroundColor = colors[1];
  } else if (width > 600) {
    body.style.backgroundColor = colors[0];
  } else {
    body.style.backgroundColor = colors[2];
  }
}

function init() {
  body.style.backgroundColor = colors[1];
  window.addEventListener("resize", resizeHandler);
}
init();
