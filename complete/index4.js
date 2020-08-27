const title = document.querySelector("#title");

const BASE_COLOR = "rgb(255, 245, 245)";
const OTHER_COLOR = "#fab1a0";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseover", handleClick);
}

init();
//event 찾는 법: HTML JavaScript DOM event MDN

function handleOffline() {
  console.log("Bye bye");
}

function handleOnline() {
  console.log("Welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
