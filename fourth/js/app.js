var form = document.querySelector("form");
var amountField = document.querySelector("#principalAmount");
var rateField = document.querySelector("#growthRate");
var numberOfPeriodsField = document.querySelector("#numberOfPeriods");
var resultArea = document.querySelector("#result");

function calculateReturn(e) {
  e.preventDefault();
  // Do calculations
  var p = amountField.value;
  var r = rateField.value;
  var n = numberOfPeriodsField.value;

  var calculated = Math.floor(p * Math.pow(1 + r / 100, n));

  // Update on UI
  if (n > 1) {
    resultArea.textContent =
      "The principal amount would grow to " +
      calculated +
      " in " +
      n +
      " periods.";
  } else {
    resultArea.textContent =
      "The principal amount would grow to " +
      calculated +
      " in " +
      n +
      " periods.";
  }
}

form.addEventListener("submit", calculateReturn);
