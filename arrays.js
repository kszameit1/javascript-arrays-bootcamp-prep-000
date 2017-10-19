var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a, b) {
  return [b, ...a]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}

function addElementToEndOfArray(a, b) {
  return [...a, b]
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element)
}
