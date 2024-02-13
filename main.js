// const spacing = document.querySelector("#spacing");
// const blur = document.querySelector("#blur");
// const base = document.querySelector("#base");

const inputs = document.querySelectorAll("input");
const au = document.querySelector("#sound");
function handleUpdate() {
  const suffix = this.dataset.sizing || "";

  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("input", handleUpdate));

inputs.forEach((input) => {
  const handleChangeOnce = () => {
    if (input.name === "blur") {
      au.currentTime = 0;
      au.play();
    }

    // Удаляем обработчик события после первого срабатывания
    input.removeEventListener("change", handleChangeOnce);
  };

  input.addEventListener("change", handleChangeOnce);
});
