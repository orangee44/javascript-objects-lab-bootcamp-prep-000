var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

  1) Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair:
     ReferenceError: updateObjectWithKeyAndValue is not defined
      at Context.<anonymous> (test/index-test.js:12:7)
