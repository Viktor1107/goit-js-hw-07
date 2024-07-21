const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", handleInput);

function handleInput(event) {
  const nameValue = nameInput.value.trim();
  nameOutput.textContent = nameValue ? nameValue : "anonymous";
}
