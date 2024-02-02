let equal_pressed = 0;

let output = document.getElementById("output");
let all_Operations = "+-*/.**";

let buttons = document.querySelectorAll(".buttons");

let clean = document.getElementById("btn_clean");
let result = document.getElementById("btn_result");
let backspace = document.getElementById("btn_backspace");

buttons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    if (output.innerHTML == "Erro") {
      output.innerHTML = "";
    }
    check_RepeatOperations(buttons.value);
    output.scrollLeft = output.scrollWidth;
  });
});

// -------- Check for repeat operations ---------------
function check_RepeatOperations(current_btnValue) {
  if (all_Operations.includes(current_btnValue)) {
    if (all_Operations.includes(output.innerHTML.slice(-1))) {
    } else if (all_Operations.includes(output.innerHTML.slice(-2))) {
    } else {
      output.innerHTML += current_btnValue;
    }
  } else {
    output.innerHTML += current_btnValue;
  }
}

// ---------------- Equal action ----------------------
result.addEventListener("click", equal);

function equal() {
  equal_pressed = 1;
  let expression = output.innerHTML;
  document.querySelector(".previous").innerHTML = expression;
  try {
    let solution = eval(expression);
    if (Number.isInteger(solution)) {
      output.innerHTML = `${solution}`;
    } else {
      output.innerHTML = `${solution.toFixed(2)}`;
    }
  } catch (err) {
    output.innerHTML = "Erro";
  }
}

// ---------------- Clean Action ----------------------
clean.addEventListener("click", () => {
  output.innerHTML = " ";
  document.querySelector(".previous").innerHTML = " ";
});

// ----------------  Backspace Action -----------------
backspace.addEventListener("click", () => {
  output.innerHTML = output.innerHTML.substring(0, output.innerHTML.length - 1);
});
