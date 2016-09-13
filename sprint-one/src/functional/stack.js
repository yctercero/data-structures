var Stack = function() {
  var counter = 0;
  var someInstance = {};

  var storage = {};

  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    if(counter){
      counter--;
    }

    return storage[counter];
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
