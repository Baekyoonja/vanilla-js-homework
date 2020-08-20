// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const title = document.querySelector("h2");


const BASE_COLOR = colors[1];
const MOUSEOVER_COLOR = colors[0];
const RESIZE_COLOR = colors[2];
const CLICK_COLOR = colors[3];
const currentColor =title.style.color;

const superEventHandler = {
  
  resizeHandlers: function handleResize(){
    
      title.style.color= RESIZE_COLOR;
      title.innerHTML ="You just resized!"
      
  },
  mouseoverHandlers: function handleMouseOver() {
    
      title.style.color= MOUSEOVER_COLOR;
      title.innerHTML = "The mouse is here!";
     
  }, 
  mouseoutHandlers: function handleMouseOut(){
  
      title.style.color=BASE_COLOR;
      title.innerHTML="The mouse is gone!";
    
  },
  clickHandlers: function handleClicked(){
    
      title.style.color= CLICK_COLOR;
      title.innerHTML="That was a right click!"
  },
  

};


function handlers(){
  window.addEventListener("resize", superEventHandler.resizeHandlers);
  title.addEventListener("mouseover", superEventHandler.mouseoverHandlers);
  title.addEventListener("mouseout",superEventHandler.mouseoutHandlers );
  window.addEventListener("contextmenu",superEventHandler.clickHandlers);
}
handlers();