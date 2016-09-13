var Queue = function() {
  var oldestIndex = 1;
  var newestIndex = 1;
  var someInstance = {};

  var storage = {};

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
