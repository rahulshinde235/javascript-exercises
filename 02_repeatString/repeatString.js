const repeatString = function (string, numOfTimesToRepeat) {
  let repeatedString = "";
  if (numOfTimesToRepeat < 0) {
    repeatedString = "ERROR";
    return repeatedString;
  }
  for (let i = 0; i < numOfTimesToRepeat; i++) {
    repeatedString += string;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
