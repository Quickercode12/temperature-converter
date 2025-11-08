function convertTemperature() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("unit").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(temp)) {
    resultDiv.innerHTML = "❌ Please enter a valid number.";
    return;
  }

  let c, f, k;

  if (unit === "C") {
    c = temp;
    f = (c * 9) / 5 + 32;
    k = c + 273.15;
  } else if (unit === "F") {
    f = temp;
    c = ((f - 32) * 5) / 9;
    k = c + 273.15;
  } else if (unit === "K") {
    k = temp;
    c = k - 273.15;
    f = (c * 9) / 5 + 32;
  }

  resultDiv.innerHTML = `
        <p><strong>Input:</strong> ${temp}°${unit}</p>
        <p><strong>Celsius:</strong> ${c.toFixed(2)}°C</p>
        <p><strong>Fahrenheit:</strong> ${f.toFixed(2)}°F</p>
        <p><strong>Kelvin:</strong> ${k.toFixed(2)}K</p>
      `;

      // Clear input field after conversion
   document.getElementById("tempInput").value = '';
}
