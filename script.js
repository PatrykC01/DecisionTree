const minusBtn = document.getElementById("button-minus");
const plusBtn = document.getElementById("button-plus");
const depthValueInput = document.getElementById("depthValueInput");
const generateBtn = document.getElementById("generateBtn");

minusBtn.onclick = function () {
  let currentVal = depthValueInput.value;

  depthValueInput.value = currentVal - 1;
};

plusBtn.onclick = function () {
  let currentVal = parseInt(depthValueInput.value);

  depthValueInput.value = currentVal + 1;
};

generateBtn.onclick = function () {
  alert("Tworze drzewo...")
};
