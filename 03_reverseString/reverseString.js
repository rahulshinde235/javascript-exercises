const reverseString = function (str) {
  const splitStr = str.split(" ");
  let reversedStrArr = [];
  for (let index = splitStr.length - 1; index >= 0; index--) {
    const words = splitStr[index];
    const chars = words.split("");
    let reversedWord = [];
    for (let j = chars.length - 1; j >= 0; j--) {
      const element = chars[j];
      reversedWord.push(element);
    }
    reversedWord = reversedWord.join("");
    reversedStrArr.push(reversedWord);
  }
  return reversedStrArr.join(" ");
};

// Do not edit below this line
module.exports = reverseString;
