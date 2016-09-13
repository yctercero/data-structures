var Queue = function() {
  var oldestIndex = 1;
  var newestIndex = 1;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[newestIndex] = value;
    newestIndex++;
  };

  someInstance.dequeue = function() {
    var stored = storage[oldestIndex];
    delete storage[oldestIndex];
    oldestIndex++;
    return stored;
  };

  someInstance.size = function() {
    return newestIndex - oldestIndex > 0 ? newestIndex - oldestIndex : 0;

  };

  return someInstance;
};
