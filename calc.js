let equal_pressed = 0;

let output = document.getElementById("output");
let all_Operations = "+-*/.**";

let buttons = document.querySelectorAll(".buttons");

let clean = document.getElementById("btn_clean");
let result = document.getElementById("btn_result");
let backspace = document.getElementById("btn_backspace");

window.onload = () => {
  output.value = " ";
};

buttons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    if (output.value == "Expressão invalida") {
      output.value = "";
    }
    check_RepeatOperations(buttons.value);
  });
});

// -------- Check for repeat operations ---------------
function check_RepeatOperations(current_btnValue) {
  if (all_Operations.includes(current_btnValue)) {
    if (all_Operations.includes(output.value.slice(-1))) {
    } else if (all_Operations.includes(output.value.slice(-2))) {
    } else {
      output.value += current_btnValue;
    }
  } else {
    output.value += current_btnValue;
  }
}

// ---------------- Equal action ----------------------
result.addEventListener("click", equal);

function equal() {
  equal_pressed = 1;
  let expression = output.value;

  try {
    let solution = eval(expression);
    if (Number.isInteger(solution)) {
      output.value = solution;
    } else {
      output.value = solution.toFixed(2);
    }
  } catch (err) {
    output.value = "Expressão invalida";
  }
}

// ---------------- Clean Action ----------------------
clean.addEventListener("click", () => {
  output.value = " ";
});

// ----------------  Backspace Action -----------------
backspace.addEventListener("click", () => {
  output.value = output.value.substring(0, output.value.length - 1);
});

// Função que permite que apenas numeros e simbolos matematicos sejam digitados no output

function isNumberOrOperator(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (
    charCode == 43 ||
    charCode == 45 ||
    charCode == 42 ||
    charCode == 47 ||
    charCode == 40 ||
    charCode == 41 ||
    charCode == 40 ||
    charCode == 41 ||
    charCode == 123 ||
    charCode == 125 ||
    charCode == 91 ||
    charCode == 93 ||
    charCode == 46 ||
    (charCode >= 48 && charCode <= 57)
  ) {
    return true;
  }
  return false;
}
