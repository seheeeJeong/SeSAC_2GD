/* 변수
    - var
        - 중복선언(재선언) 가능
        - 예기치 못한 값을 반환할 수 있음
    - let
        - 중복 선언 불가능, 재할당은 가능
        - 
    - const
        - 재선언 불가능, 재할당 불가능
        - 선언과 동시에 초기화 해야함
*/

var name = "홍길동";
console.log(name);

var name = "나비";
console.log(name);

// let
let a;
console.log(a); // undefined
a = 10;
console.log(a); // 10
// let a = 5;

// const
const b = 1;
// b = 12; 재선언 불가

let q = 10;
// 값을 변경하고 싶으면 let일때 재할당을 해야한다.
q = q - 5;
console.log(q);

/* 연산자 
    산술연산자: + - * /
    대입연산자: =
    비교연산자: == === != !== < > <= >=
    논리연산자: !(NOT) &&(AND) ||(OR)
*/

console.log(1 == 1); // true
console.log(1 == "1"); // true. 사실 좋지않은 결과물이므로 === 을 써서 type까지 검사해주는 것이 좋은
console.log(1 != 1); // false
// console.log(1 != "1"); // false
console.log(1 === "1"); // false. 값만 비교했을땐 같지만 데이터 type이 다름. number과 string

// 크기 비교 < > <= >=
console.log(1 < 2); // true
console.log(1 > 2); // false
console.log(1 <= 2); // true
console.log(1 >= 2); // false

// 산술 연산
console.log(1 + 1); // 2
console.log(5 - 3); // 2
console.log(5 * 3); // 15
console.log(5 / 3); // 1.6666667
console.log(5 % 3); // 2

// 논리 연산
console.log(!true); // false
console.log(!!true); // true
console.log(true || true); // true
console.log(true || false || false); // true. 하나라도 true면 무조건 true
console.log(true && true); // true
console.log(true && false); // false. 하나라도 false면 무조건 false
console.log((2 > 1 && -2 < 1) || 5 > 2); // true

console.log("" == "0"); // false
console.log(false == "hi"); // false
console.log("0" == false); // true
console.log("0" == true); // false
console.log("0" == 0); // true
console.log("" == 0); // true
console.log(undefined == null); // true
