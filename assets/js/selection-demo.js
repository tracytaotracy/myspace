const presets = {
  quality: { label: "Quality compounders", base: 12.4, risk: "Moderate" },
  value: { label: "Value recovery", base: 9.1, risk: "Elevated" },
  momentum: { label: "Earnings momentum", base: 14.8, risk: "Elevated" }
};

const form = document.querySelector("#selection-form");
const result = document.querySelector("#demo-result");
const scenario = document.querySelector("#scenario");
const scenarioButtons = document.querySelectorAll("[data-scenario]");

function renderResult() {
  const preset = presets[form.elements.methodology.value];
  const horizon = Number(form.elements.horizon.value);
  const tilt = form.elements.tilt.value === "conservative" ? -1.8 : 1.4;
  const estimate = Math.max(0, preset.base + (horizon - 3) * 0.9 + tilt);
  result.hidden = false;
  result.querySelector("[data-result='method']").textContent = preset.label;
  result.querySelector("[data-result='return']").textContent = `${estimate.toFixed(1)}%`;
  result.querySelector("[data-result='risk']").textContent = preset.risk;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderResult();
});

scenarioButtons.forEach((button) => {
  button.addEventListener("click", () => {
    scenarioButtons.forEach((item) => item.classList.remove("is-selected"));
    button.classList.add("is-selected");
    scenario.textContent = button.dataset.scenario === "a"
      ? "Scenario A selected: prioritize balance-sheet resilience and accept a smaller opportunity set."
      : "Scenario B selected: prioritize growth and accept higher volatility for a wider opportunity set.";
  });
});
