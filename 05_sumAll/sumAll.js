const sumAll = function (num1, num2) {
  if (
    Number.isInteger(num1) == false ||
    Number.isInteger(num2) == false ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }
  let sum = 0;
  const biggerNum = num1 > num2 ? num1 : num2;
  const smallerNum = num1 > num2 ? num2 : num1;
  console.log(biggerNum, smallerNum);

  for (let index = smallerNum; index <= biggerNum; index++) {
    sum += index;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
