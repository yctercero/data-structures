var Stack = function() {
  this.count = 0;
  this.storage = {};
};

Stack.prototype.push = function (value) {
  this.storage[this.count] = value;
  this.count++;
};
Stack.prototype.pop = function () {
  if (this.count) {
    this.count--;
  }
  var stored = this.storage[this.count];
  delete this.storage[this.count];
  return stored;
};
Stack.prototype.size = function () {
  return this.count;
};




