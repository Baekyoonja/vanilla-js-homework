const { Z_BLOCK } = require("zlib");

const title = document.getElementById("title");
//const title=document.querySelector("#title");
//quertSelector Node의 첫번째 값을 반환한다는 의미
title.innerHTML = "Hi! From JS";
title.style.color = "yellow";
console.dir(title);
//dir 안에 있는 객체 보여 줌, 그 id에서 쓸 수 있는 객체

function handleResize() {
  console.log("I have been resized");
}

function handleResize2(event) {
  console.log(event);
} //링크 클릭과 같은 event가 발생할 때 유용

function click() {
  title.style.color = "blue";
}

window.addEventListener("resize", handleResize2);
/*hadleResize(): 이벤트 발생 기다리지 말고 바로 함수 진행하라는 얘기
handleResize: 이벤트가 발생하면 함수 진행하라는 얘기*/
window.addEventListener("click", click);
