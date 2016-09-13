var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;

  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

  return someInstance;
};

var stackMethods = {
  push : function (value) {
    this.storage[this.count] = value;
    this.count++;

  },
  pop : function () {
    if (this.count) {
      this.count--;
    };
    var stored = this.storage[this.count];
    delete this.storage[this.count];
    return stored;
  },
  size : function () {
    return this.count;
  }
};


