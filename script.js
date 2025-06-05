const form = document.querySelector("form");
const complete = document.querySelector(".complete");
let success = false;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  Array = [];
  const name = document.querySelector(".name");
  const idNo = document.querySelector(".idNo");
  const date = document.querySelector(".exDate");
  const cvc = document.querySelector(".cvcNo");

  const nameInput = document.querySelector(".nameInput");
  const idNoInput = document.querySelector("#idNoInput");
  const monthInput = document.querySelector(".monthInput");
  const yearInput = document.querySelector(".yearInput");
  const cvcInput = document.querySelector(".cvcInput");

  const inputs = document.querySelectorAll("input[required]");
  const errors = document.querySelectorAll(".errors");
  let validForm = true;
  let ValidInputs = 5;

  function validateId(Id) {
    return /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(Id);
  }
  // function validateDate(date) {
  //   return /^\d{2}\$/.test(date);
  // }
  // function validateCVC(cvcNo) {
  //   return /^\d{3}\$/.test(cvcNo);
  // }
  inputs.forEach((input, index) => {
    let x = 0;
    if (index > 3) {
      x = index - 1;
    } else {
      x = index;
    }

    if (input.value == "") {
      input.classList.add("error");
      input.closest(".field").querySelector(".errors").classList.add("error");
      validForm = false;
      ValidInputs--;
    } else if (index == 1 && !validateId(input.value)) {
      input.closest(".field").querySelector(".errors").textContent =
        "Wrong format, Numbers only.";
      errors[x].classList.add("error");
      input.classList.add("error");
      ValidInputs--;
      validForm = false;
    } else {
      input
        .closest(".field")
        .querySelector(".errors")
        .classList.remove("error");

      input.classList.remove("error");
    }
  });

  if (validForm && ValidInputs == 5) {
    inputs.forEach((input) => {
      Array.push(input.value);
    });
    name.textContent = Array[0];
    idNo.textContent = Array[1];
    date.textContent = `${Array[2]}/${Array[3]}`;
    cvc.textContent = Array[4];

    success = true;
  }
  if (success) {
    form.style.display = "none";
    complete.style.display = "flex";
  }
});
