// const spacing = document.querySelector("#spacing");
// const blur = document.querySelector("#blur");
// const base = document.querySelector("#base");

const inputs = document.querySelectorAll("input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";

  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("input", handleUpdate));
