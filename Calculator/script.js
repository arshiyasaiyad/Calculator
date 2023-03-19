function insert(num) {
  document.getElementById("input").value += num;
}

function clearInput() {
  document.getElementById("input").value = "";
}

function backspace() {
  var input = document.getElementById("input").value;
  document.getElementById("input").value = input.substring(0, input.length - 1);
}

function calculate() {
  var input = document.getElementById("input").value;
  if (input) {
      document.getElementById("input").value = eval(input);
  }
}
