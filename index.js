let buttons = document.querySelectorAll(".input__button");
const output = document.getElementById("display__amount");
const numberOfPeople = document.getElementById("number__ofpeople");
const resetbtn = document.getElementById("resetbtn");
let inputField = document.getElementById("input__fild");
let customNumber = document.getElementById("customNumber");

customNumber.addEventListener("input", () => {
  customValue = Number(customNumber.value);
  let inputValue = Number(inputField.value);

  if (!inputValue) {
    alert("Please enter a valid number.");
    return false;
  } else {
    let people = 100 / customValue;
    numberOfPeople.innerText = people;
    let result = (inputValue * customValue) / 100;
    output.innerText = result;
  }
});

resetbtn.addEventListener("click", () => {
  output.innerText = "$0";
  numberOfPeople.innerText = "$0";
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let inputValue = Number(inputField.value); // Parse the input value as a number
    let percentage = Number(button.value);

    if (!inputValue || !percentage) {
      alert("Please enter a valid number.");
      return false;
    } else {
      // Result this value as a percentage
      let people = 100 / percentage;
      let result = (inputValue * percentage) / 100;
      output.innerText = result;
      numberOfPeople.innerText = people;
      inputField.value = "";
    }
  });
});
