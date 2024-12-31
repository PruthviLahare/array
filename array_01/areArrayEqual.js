const areArrayEqual = function (array1, array2) {
  console.log(array1);
  console.log(array2);

  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (Array.isArray(array1[index]) || Array.isArray(array1[index])) {
      return areArrayEqual(areArrayEqual(array1[index], array2[index]));
    }

    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
};

console.log(areArrayEqual([1, 2, 3, 4], [1, 2, 3, 4]));
