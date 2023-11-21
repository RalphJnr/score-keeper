const p1Button = document.querySelector(".p1-btn");
const p2Button = document.querySelector(".p2-btn");
const score = document.querySelector("#score-select");
const reset = document.querySelector(".reset");
let selectedValue = 3;

let p1Counter = 0;
let p2Counter = 0;

const p1Text = document.querySelector(".p1-text");
const p2Text = document.querySelector(".p2-text");

score.addEventListener("change", function (e) {
  selectedValue = Number(e.target.value);
  console.log(e.target.value);
});

p1Button.addEventListener("click", function () {
  p1Counter += 1;
  p1Text.innerText = p1Counter;

  if (p1Counter === selectedValue) {
    p2Button.setAttribute("disabled", "");
    p1Button.setAttribute("disabled", "");

    p1Text.style.color = "green";
    p2Text.style.color = "red";

    p1Button.setAttribute("class", "disabled-green");
    p2Button.setAttribute("class", "disabled-cyan");
  }
});

p2Button.addEventListener("click", function () {
  p2Counter += 1;
  p2Text.innerText = p2Counter;

  if (p2Counter === selectedValue) {
    p1Button.setAttribute("disabled", "");
    p2Button.setAttribute("disabled", "");

    //   changing text color
    p2Text.style.color = "green";
    p1Text.style.color = "red";

    //   changing background color
    p1Button.setAttribute("class", "disabled-green");
    p2Button.setAttribute("class", "disabled-cyan");
  }
});

reset.addEventListener("click", function () {
  p1Counter = 0;
  p2Counter = 0;

  p1Text.innerText = p1Counter;
  p2Text.innerText = p2Counter;

  p1Button.setAttribute("class", "green");
  p2Button.setAttribute("class", "cyan");
  p1Text.style.color = "";
  p2Text.style.color = "";
});
