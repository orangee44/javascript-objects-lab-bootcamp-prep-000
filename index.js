var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newRecipes = Object.assign({}, object);
  delete newRecipes[key];
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
}

  1) Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:
     ReferenceError: destructivelyDeleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:62:20)
