function squareNumber() {
  const number = parseFloat(document.getElementById("numberInput").value);
  const result = number * number;
  document.getElementById("result").innerText =
    "Square of " + number + " is " + result;
}
