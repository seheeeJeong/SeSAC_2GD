console.log(document);
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.URL);

// getElementById
// Id는 문서 내에 딱 하나만 존재
console.log(document.getElementById("red"));
console.log(document.getElementById("green"));

// getElementsByClassName (Elements!! 복수 주의)
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("pink")[1]); // <div class="pink">2</div>

// getElementsByTagName
console.log(document.getElementsByTagName("div")[5]);

// getElementsByName
console.log(document.getElementsByName("id"));

// querySelector
// 선택자와 일치하는 첫번째 요소 반환
console.log(document.querySelector(".pink")); // <div class="pink">1</div>
console.log(document.querySelector(".others")); // <div id="green" class="others">green</div>
console.log(document.querySelector("#green")); // <div id="green" class="others">green</div>
console.log(document.querySelector("div")); // <div class="pink">1</div>
console.log(document.querySelector("[name='id']")); // <input type="text" name="id" />

console.log("----------------------------------");

// querySelectorAll
const divs = document.querySelectorAll("div");
console.log(divs);
const pinks = document.querySelectorAll(".pink");
console.log(pinks);

console.log(pinks[0]);
console.log(pinks[1]);
console.log(pinks[2]);
console.log(pinks[3]);

console.log("----------------------------------");

for (let i = 0; i < pinks.length; i++) {
  console.log(pinks[i]);
}
// for of문 사용
for (let pink of pinks) {
  console.log(pink);
}
