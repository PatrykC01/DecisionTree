const minusBtn = document.getElementById("button-minus");
const plusBtn = document.getElementById("button-plus");
const depthValueInput = document.getElementById("depthValueInput");
const generateBtn = document.getElementById("generateBtn");

minusBtn.onclick = function () {
  let currentVal = parseInt(depthValueInput.value);
  depthValueInput.value = currentVal - 1;
};

plusBtn.onclick = function () {
  let currentVal = parseInt(depthValueInput.value);
  depthValueInput.value = currentVal + 1;
};

generateBtn.onclick = async function () {
  alert("Tworze drzewo...");
  try {
    const response = await fetch('http://localhost:3000/databases');
    const databases = await response.json();
    console.log("Databases:", databases);
    alert(`Databases: ${databases.map(db => db.name).join(', ')}`);
  } catch (error) {
    console.error('Error fetching databases:', error);
  }
};
