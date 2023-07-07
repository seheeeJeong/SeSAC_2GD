// jQ val() 사용
function getValue() {
  // input의 value를 가지고 와서 alert창에 띄워줌
  const value = $("input").val();
  alert(value);
}

function setValue() {
  $("input").val("설정완료");
}

/* css() 사용 */
function changeCssJs() {
  // span: 20px, 빨간색
  let span = document.querySelector("span");
  span.style = "font-size: 20px; color:red";
}
function changeCssJQ() {
  // span: 40px, 파란색
  $("span").css("font-size", "40px");
  $("span").css("color", "blue");
}
function getCssJQ() {
  // css 특정 속성값 가져오기
  console.log($("span").css("color"));
}

/* attr() */
function changeAttrJs() {
  // 네이버로 이동
  let a = document.querySelector("a");
  a.setAttribute("href", "http://naver.com"); // => a.href='http://naver.com 같은 뜻
}
function changeAttrJQ() {
  // 다음으로 이동
  // target='_self'로 변경
  $("a").attr("href", "http://daum.net");
  $("a").attr("target", "_self");
}

/* text() */
// &hearts; => text로 변경됨
function changeTextJs() {
  let p = document.querySelector(".p-text");
  p.innerText = "js로 변경 &hearts;";
}
function changeTextJQ() {
  $(".p-text").text("jQ로 변경 &hearts;");
}

/* html() */
// &hearts; => 하트 이모티콘 ♥
function changeHtmlJs() {
  let p = document.querySelector(".p-html");
  p.innerHTML = "js로 변경 &hearts;";
}
function changeHtmlJQ() {
  $(".p-html").html("jQ로 변경 &hearts;");
}
