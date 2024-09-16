const removeFromArray = function (arr, ...Args) {
  const newArr = [];
  const args = [...Args];

  for (let i of arr) {
    if (!args.includes(i)) {
      newArr.push(i);
    }
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
