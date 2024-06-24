document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("rangeSlider");
  const pipsContainer = document.getElementById("pips");
  const min = parseInt(slider.min);
  const max = parseInt(slider.max);
  const step = parseInt(slider.step);

  for (let i = min; i <= max; i += step) {
    const pip = document.createElement("div");
    pip.className = "pip";
    pip.style.left = `${((i - min) / (max - min)) * 100}%`;

    const pipValue = document.createElement("div");
    pipValue.className = "pip-value";
    pipValue.textContent = i;

    pip.appendChild(pipValue);
    pipsContainer.appendChild(pip);
  }

  slider.addEventListener("input", (e) => {
    const value = e.target.value;
    console.log(`Slider Value: ${value}`);
  });
});
