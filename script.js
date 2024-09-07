const btn1 = document.getElementsByClassName("btn1")[0];
const btn2 = document.getElementsByClassName("btn2")[0];
const btn3 = document.getElementsByClassName("btn3")[0];
const btn4 = document.getElementsByClassName("btn4")[0];
const btn5 = document.getElementsByClassName("btn5")[0];
const btn6 = document.getElementsByClassName("btn6")[0];
const btn7 = document.getElementsByClassName("btn7")[0];
const btn8 = document.getElementsByClassName("btn8")[0];
const btn9 = document.getElementsByClassName("btn9")[0];
const btn10 = document.getElementsByClassName("btn10")[0];
const btn11 = document.getElementsByClassName("btn11")[0];
const btn12 = document.getElementsByClassName("btn12")[0];
const btn13 = document.getElementsByClassName("btn13")[0];
const btn14 = document.getElementsByClassName("btn14")[0];
const btn15 = document.getElementsByClassName("btn15")[0];
const btn16 = document.getElementsByClassName("btn16")[0];
const btn17 = document.getElementsByClassName("btn17")[0];
const btn18 = document.getElementsByClassName("btn18")[0];
const btn19 = document.getElementsByClassName("btn19")[0];
const btn20 = document.getElementsByClassName("btn20")[0];
const result_container = document.getElementsByClassName("result")[0];

btn1.addEventListener("click", (event) => {
  event.preventDefault();
  result_container.innerHTML = "";
});
btn2.addEventListener("click", (event) => {
  event.preventDefault();
  result_container.innerHTML += "/";
});
btn3.addEventListener("click", (event) => {
  event.preventDefault();
  result_container.innerHTML += "*";
});
btn4.addEventListener("click", (event) => {
  event.preventDefault();
  result_container.innerHTML = "";
});
btn5.addEventListener("click", (event) => {
  event.preventDefault();
  result_container.innerHTML += "7";
});
btn6.addEventListener("click", (event) => {
  event.preventDefault();
  result_container.innerHTML += "8";
});
btn7.addEventListener("click", (event) => {
  event.preventDefault();
  result_container.innerHTML += "9";
});
btn8.addEventListener("click", (event) => {
  event.preventDefault();
  result_container.innerHTML += "-";
});
btn9.addEventListener("click", (event) => {
  event.preventDefault();
  result_container.innerHTML += "4";
});
btn10.addEventListener("click", (event) => {
  event.preventDefault();
  result_container.innerHTML += "5";
});
btn11.addEventListener("click", (event) => {
  event.preventDefault();
  result_container.innerHTML += "6";
});
btn12.addEventListener("click", (event) => {
  event.preventDefault();
  result_container.innerHTML += "+";
});
btn13.addEventListener("click", (event) => {
  event.preventDefault();
  result_container.innerHTML += "1";
});
btn14.addEventListener("click", (event) => {
  event.preventDefault();
  result_container.innerHTML += "2";
});
btn15.addEventListener("click", (event) => {
  event.preventDefault();
  result_container.innerHTML += "3";
});
btn16.addEventListener("click", (event) => {
  event.preventDefault();
  result_container.innerHTML += "**";
});
btn17.addEventListener("click", (event) => {
  event.preventDefault();
  result_container.innerHTML += "%";
});
btn18.addEventListener("click", (event) => {
  event.preventDefault();
  result_container.innerHTML += "0";
});
btn19.addEventListener("click", (event) => {
  event.preventDefault();
  result_container.innerHTML += ".";
});
btn20.addEventListener("click", (event) => {
  event.preventDefault();
  const expression = result_container.textContent;
  const solution = eval(expression);
  result_container.innerHTML = solution;
});
