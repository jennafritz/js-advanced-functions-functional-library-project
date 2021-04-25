const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let valueArray = Object.values(collection)
      valueArray.forEach((element, key, collection) => {
        return callback(element, key, collection)})
      return collection
    },

    map: function(collection, callback) {
      let valueArray = Object.values(collection)
      let mappedArray = valueArray.map(callback)
      return mappedArray
    },

    reduce: function(collection, callback, acc = "") {
      let valueArray = Object.values(collection)
      let reducedValue = valueArray.reduce((acc, val, collection) => callback(acc, val, collection))
      return reducedValue
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
