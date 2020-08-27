console.log("Im Working. Im JS. Im Beautiful. Im worth it");
let a = 221; //생성과 초기화 둘 다 함, let으로 선언은 후에 초기화할 수 있지만 const는 변수 값을 변화시킬 수 없음
let b = a - 5; //변수 생성할 때: let사용, 변수 참조할 때: let 사용 안함
a = 4; // a를 업데이트 한 것
console.log(b, a); //최종적으로 error 만약 a의 변수 종류가 const 였다면

/* Create(변수생성)
Initialize(초기화)
Use(사용)*/

//기본 사용은 const 필요할 때만 let
/* Sting
const what="yoonjae";
*/

/*Boolean
const wat =true;
*/

/* Number
const wat=666;
*/

/*Float
const wat=55.1;
*/

//array에 관한 내용: 숫자 넣어도 됨, boollean 넣어도 됨, 변수 넣어도 됨
const something = "Something";
const daysOfWeek = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
  54,
  true,
  "stuff",
  something,
];

console.log(daysOfWeek);
console.log(daysOfWeek[1]);

//objects에 관한 내용
const yoonInfo = {
  name: "yoonjae",
  age: 21,
  gender: "female",
  isHandsome: true,
  favMovies: ["Along the gods", "the greatest showman"],
  favFood: [
    { name: "Kimchi", fatty: false },
    { name: "cheese burger", fatty: true },
  ],
};
console.log(yoonInfo);
console.log(yoonInfo.gender);
yoonInfo.gender = "male";
console.log(yoonInfo.gender);
//yoonInfo 안에 있는 값은 바꿀 수 있음 그러나 yoonInfo 자체는 바꿀 수 없음
//object 안에 array를 넣을 수 있음
//, 까먹지 말자!!

/*console: object(js안에 있는 object), log: function(함수)
console.log(console) 찍어봐도 재미있음*/

console.log(console, yoonInfo);

function sayHello(name, age) {
  console.log("Hello!", name, "you have", age, "years of age.");
}

sayHello("yoonjae", 21); //"yoonjae"is argument and argument is like variable
console.log(); //log is function in console object

function sayHello(name, age) {
  console.log("Hello!" + name + "you have" + age + "years of age.");
}

function sayHello(name, age) {
  return `Hello ${name} you are ${age} years old`;
}

const greetYoon = sayHello("yoonjae", 21);

console.log(greetYoon);

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  division: function (a, b) {
    return a / b;
  },
  minus: function (a, b) {
    return a - b;
  },
  squared: function (a, b) {
    return a ** b;
  },
};

const plus = calculator.plus(5, 5);
const multiply = calculator.multiply(5, 5);
const division = calculator.division(5, 5);
const minus = calculator.minus(5, 5);
const squared = calculator.squared(5, 5);
console.log(plus, multiply, division, minus, squared);
