let n1 = document.querySelector("#num1");
let n2 = document.querySelector("#num2");
let opr = document.querySelector("#opr");
let calBtn = document.querySelector("#calculate");
let result = document.querySelector("#result");

calBtn.addEventListener("click", () => {
  n1 = Number(n1.value);
  n2 = Number(n2.value);
  opr = opr.value;

  if (opr === "+") {
    result.innerHTML = `Answer is: ${n1 + n2}`;
  } else if (opr === "-") {
    result.innerHTML = `Answer is: ${n1 - n2}`;
  } else if (opr === "*") {
    result.innerHTML = `Answer is: ${n1 * n2}`;
  } else if (opr === "/") {
    n2 === 0
      ? alert("can't Divisible by Zero")
      : (result.innerHTML = `Answer is: ${n1 / n2}`);
  } else if (opr === "%") {
    n2 === 0
      ? alert("can't Divisible by Zero")
      : (result.innerHTML = `Answer is: ${n1 % n2}`);
  } else {
    alert("Invalid Operator");
  }
});
