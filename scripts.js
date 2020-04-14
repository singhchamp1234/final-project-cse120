window.addEventListener("load", () => {
  const form = document.querySelector(".form");

  const name = document.querySelector("#name");

  const department = document.querySelector("#department");

  form.addEventListener("submit", e => {
    e.preventDefault();

    checkInputs();
  });

  function checkInputs() {
    const nameValue = name.value.trim();
    const departmentValue = department.value.trim();

    if (nameValue === "") {
      setErrorFor(name, "name cannot be blank");
    } else {
      setSuccessFor(name);
    }

    if (departmentValue === "") {
      setErrorFor(department, "department cannot be blank");
    } else {
      setSuccessFor(department);
    }
  }
  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className = "form-control error";
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
  }
});
