function isNum(value) {
  if (typeof value !== "number" || isNaN(value)) return false;
  return true;
}

const convertToCelsius = function(degrees) {
  if (!isNum(degrees)) return "ERROR";
  return +((degrees - 32) * 5 / 9).toFixed(1);
};

const convertToFahrenheit = function(degrees) {
  if (!isNum(degrees)) return "ERROR";
  return +(degrees * 9 / 5 + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
