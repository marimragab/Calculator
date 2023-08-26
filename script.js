const theme1 = document.getElementById("theme-one");
const theme2 = document.getElementById("theme-two");
const theme3 = document.getElementById("theme-three");
const theme1Circle = document.getElementById("theme-one-circle");
const theme2Circle = document.getElementById("theme-two-circle");
const theme3Circle = document.getElementById("theme-three-circle");
const changeTheme = document.querySelector("body");
const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn button");

console.log(theme1, theme2, theme3);

theme1.addEventListener("click", () => {
  changeTheme.setAttribute("id", "theme1");
  theme1Circle.style.opacity = 1;
  theme2Circle.setAttribute("style", "opacity: 0;");
  theme3Circle.setAttribute("style", "opacity: 0;");
});

theme2.addEventListener("click", () => {
  changeTheme.setAttribute("id", "theme2");
  theme2Circle.setAttribute("style", "opacity: 1;");
  theme1Circle.setAttribute("style", "opacity: 0;");
  theme3Circle.setAttribute("style", "opacity: 0;");
});

theme3.addEventListener("click", () => {
  changeTheme.setAttribute("id", "theme3");
  theme3Circle.setAttribute("style", "opacity: 1;");
  theme1Circle.setAttribute("style", "opacity: 0;");
  theme2Circle.setAttribute("style", "opacity: 0;");
});

function calculate(expression) {
  let result = 0;
  try {
    result = new Function("return " + expression)();
  } catch (error) {
    result = "Error";
  }
  return result;
}

let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value === "reset") {
      expression = "";
      screen.value = ""; // Reset the screen
    } else if (button.value === "output") {
      try {
        const calculatedResult = calculate(expression);
        if (typeof calculatedResult === "number") {
          screen.value = calculatedResult.toLocaleString();
        } else {
          screen.value = calculatedResult;
        }
      } catch (error) {
        screen.value = "Error";
      }
      expression = "";
    } else if (button.value === "del") {
      expression = expression.slice(0, -1);
      screen.value = expression;
    } else if (button.value === "decimal") {
      if (!expression.includes(".")) {
        expression += ".";
        screen.value = expression;
      }
    } else {
      expression += button.value;
      screen.value = expression.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  });
});
