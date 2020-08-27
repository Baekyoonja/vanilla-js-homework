const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";
/*VERSION1
function handleClick() {
  const currentClassname = title.className;
  if (currentClassname !== CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
  } else {
    title.className = "";
  }
}
*/

/*VERSION2
function hadleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }
}
*/
//VERSION3
function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}
function init() {
  title.addEventListener("click", handleClick);
}
init();
"#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c";
