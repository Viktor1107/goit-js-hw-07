const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const emailInput = event.target.email.value.trim();
  const passwordInput = event.target.password.value.trim();

  if (emailInput === "" || passwordInput === "") {
    alert("Please fill in all the fields.");
    return;
  }
  console.log("Email:", emailInput);
  console.log("Password:", passwordInput);
  event.target.reset();
}
