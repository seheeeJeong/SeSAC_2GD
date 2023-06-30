/* 함수 선언문
    function 함수이름(매개변수){
        함수내용;
    }
    함수 이름은 camelCase를 이용해주기!
     */

helloWorld1(); // 선언이 아래에 있어도 위에서 호출할 수 있다
console.log("--------");
function helloWorld1() {
  console.log("hello world1");
}
helloWorld1();

function helloWorld2() {
  return "hello world2";
}
/* return 
    - 함수의 반환값, 함수 내부 코드의 '최종값' */
console.log(helloWorld2());

function add(num1, num2) {
  console.log(num1 + num2);
}

function add2(num1, num2) {
  console.log("여기는 실행됨");
  return num1 + num2;
  console.log("return 뒤인 여기는 실행되지 않음");
}
add(5, 10);
add2(3, 2);
// helloWorld3(); // 함수 표현식은 반드시 선언한 아래에서만 호출 가능

// 함수 표현식
const helloWorld3 = function () {
  console.log("hello world3");
};
helloWorld3();

// 화살표 함수 == 함수 표현식 (선언 아래에서 호출 가능)
const helloWorld4 = () => {
  return "hello world4";
};
console.log(helloWorld4());

/* 매개변수가 있는 함수 */
function sayHello1(name) {
  return "안녕하세요. " + name + "님";
}
console.log(sayHello1("세희"));

function sayHello2(text, name) {
  console.log(`${text}!! ${name}님`);
}
let 안녕 = "안녕하세요.";
sayHello2("안녕", "sehee");

// sayHello2를 함수 표현식으로 변경
const sayHello3 = function () {
  return "`${text}!! ${name}님`";
};
sayHello3();

console.log("------- 실습1: 함수 만들기 ------------");
// 함수
function multifly2(num1, num2) {
  return num1 * num2;
}
multifly2(3, 7);
multifly2(2, 2);

// 함수 표현식
const multifly = function (num1, num2) {
  return num1 * num2;
};
multifly(3, 7);
multifly(2, 2);

// 화살표 함수
const multifly3 = (num1, num2) => {
  return num1 * num2;
};
console.log(multifly3(3, 7));

console.log("------- 실습2: 함수 만들기 ------------");
function square(num3) {
  return num3 ** 2; // ** => 제곱
}
console.log(square(4));
console.log(square(11));
console.log(square(5));
