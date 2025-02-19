// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers above the threshold.
// filterAbove([6, 2, 3, 1, 4, 7], 3) => [6, 4, 7]
// filterAbove([1, 2, 3], 4) => []
// do not modify input parameters

function filterAbove(array, threshold) {
  const filteredArray = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] > threshold) {
      filteredArray[filteredArray.length] = array[index];
    }
  }

  return filteredArray;
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(array, expected, actual) {
  const message = 'numbers above the threshold 👉 "' + array + '"';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(areArrayEqual) {
  return areArrayEqual ? '✅' : '❌';
}

function testFilterAbove(array, threshold, expected) {
  const actual = filterAbove(array, threshold);
  const areArrayEqual = areEqual(actual, expected);
  const mark = getMark(areArrayEqual);

  console.log(mark, assembleMessage(array, expected, actual));
}

function testAllFilterAbove() {
  testFilterAbove([6, 2, 3, 1, 4, 7], 3, [6, 4, 7]);
  testFilterAbove([1, 2, 3], 4, []);
  testFilterAbove([5, 5, 5], 4, [5, 5, 5]);
  testFilterAbove([50, 6, 9], 1, [50, 6, 9]);
}

testAllFilterAbove();