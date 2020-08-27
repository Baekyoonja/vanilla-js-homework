//조건문
/*
if(condition){
    block
}
else{
    block
}*/
if ("10" === 10) {
  console.log("hi");
} else if ("10" === "10") {
  console.log("lalala");
} else {
  console.log("ho");
}

//피연산자 관련
if (20 > 5 && "nicolas" === "nicolas") {
  console.log("yes");
} else {
  console.log("no");
}

if (20 > 5 || "nicolas" === "nicolas") {
  console.log("yes");
} else {
  console.log("no");
}

const age = prompt("how old are you");

if (age >= 18 && age <= 21) {
  console.log("yon can drink but you should not");
} else if (age > 21) {
  console.log("go ahead");
} else {
  console.log("too young");
}
console.log(age);

//'=='와 '==='의 차이가 궁금한 분은 아래 링크 참고 해보면 좋을 듯합니다. https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons
