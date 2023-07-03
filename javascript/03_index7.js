/* 
자바스크립트가 기본적으로 가지고 있는 객체
String, Number, Array, Date, Math, Object, ...
 */

// Date 객체
// 시간, 날짜 정보를 얻을 때 사용
let now = new Date();
console.log(now);
console.log(now.getFullYear(), "연도");
console.log(now.getMonth() + 1, "월"); // 0 ~ 11 이기때문에 +1 해주기
console.log(now.getDate(), "일"); // 1 ~ 31
console.log(now.getHours(), "시");
console.log(now.getMinutes(), "분");
console.log(now.getSeconds(), "초");
console.log(now.getMilliseconds(), "ms");
console.log(now.getDay(), "요일"); // 0(일) ~ 6(토)

// let now = new Date();
let past = new Date(2020, 1, 13, 10, 10, 10);
// newDate(y, m, d, h, m, s)
// 시, 분, 초가 설정되지 않았을 때는 00:00:00
console.log(past);

// Date 객체를 이용해 오늘 요일을 얻고, switch-case문, 삼항연산자, if문으로 오늘이 평일/주말인지 구별해보자
let today = new Date().getDay();
// switch-case
switch (today) {
  case 0:
  case 6:
    console.log("주말");
    break;

  default:
    console.log("평일");
    break;
}
// 삼항연산자
console.log(today === 0 || today === 6 ? "주말" : "평일");
// if문
if (today === 0 || today === 6) {
  console.log("주말");
} else {
  console.log("평일");
}

/* Math */
// 수학적인 상수나 함수
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);

console.log(Math.max(100, -1, 30, 20, 5)); // 100 // max: 최대값을 출력
console.log(Math.min(100, -1, 30, 20, 5)); // 100 // min: 최소값을 출력

console.log(Math.ceil(5.155)); // 6 // ceil: 올림해서 정수로 변경
console.log(Math.floor(5.155)); // 5 // floor: 내림해서 정수로 변경
console.log(Math.round(5.155)); // 5 // round: 반올림해서 정수로 변경

// 난수 생성 -> random number
console.log(Math.random()); // 0 <= num < 1 의 랜덤 숫자 // 0.xxxxx
console.log(Math.random() * 10); // 0 <= num < 10 의 랜덤 숫자 // 0.xxxxx ~ 9.xxxxx
console.log(Math.floor(Math.random() * 11)); // 0 <= num <= 10 의 랜덤 정수 // 0 ~ 10
console.log(Math.floor(Math.random() * 3) + 20); // 20 <= num <= 22 의 랜덤 정수 // 20 ~ 22

// Object
const areaNum = {
  Seoul: "02",
  Incheon: "032",
  Daejeon: "042",
  Busan: "051",
  Ulsan: "052",
  Daegu: "053",
  Gwangju: "062",
  Jeju: "064",
};

console.log(Object.keys(areaNum));
console.log(Object.values(areaNum));
