const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m
const value = document.querySelector(".value");
const form = document.querySelector(".main-bloc");
const submit = document.querySelector("button");
submit.addEventListener("click", firstStep);

function firstStep(e) {
  e.preventDefault();

  getInputs();
}

function getInputs() {
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const result = document.querySelector(".result");
  const BMI = weight / Math.pow(height / 100, 2).toFixed(1);

  if (
    !height ||
    !weight ||
    height <= 40 ||
    weight <= 0 ||
    height >= 300 ||
    weight >= 300
  ) {
    value.textContent = "Erreur";
    value.style.color = "#B22222";
    result.textContent = "Veuillez remplir des valeurs correctes";
  } else {
    value.textContent = BMI.toFixed(1);
    calculateBMI(BMI);
  }
  function calculateBMI(elt) {
    if (elt < BMIData[0].range[1]) {
      value.style.color = `${BMIData[0].color}`;
      result.textContent = `${BMIData[0].name}`;
    } else if (elt >= BMIData[0].range[1] && elt < BMIData[1].range[1]) {
      value.style.color = `${BMIData[1].color}`;
      result.textContent = `${BMIData[1].name}`;
    } else if (elt >= BMIData[1].range[1] && elt < BMIData[2].range[1]) {
      value.style.color = `${BMIData[2].color}`;
      result.textContent = `${BMIData[2].name}`;
    } else if (elt >= BMIData[2].range[1] && elt < BMIData[3].range[1]) {
      value.style.color = `${BMIData[3].color}`;
      result.textContent = `${BMIData[3].name}`;
    } else if (elt >= BMIData[3].range[1] && elt < BMIData[4].range[1]) {
      value.style.color = `${BMIData[4].color}`;
      result.textContent = `${BMIData[4].name}`;
    } else {
      value.style.color = `${BMIData[5].color}`;
      result.textContent = `${BMIData[5].name}`;
    }
  }
}
