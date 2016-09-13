var Queue = function() {
  this.newestIndex = 1;
  this.oldestIndex = 1;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  this.storage[this.newestIndex] = value;
  this.newestIndex++;
};

Queue.prototype.dequeue = function(){
  var stored = this.storage[this.oldestIndex];
  delete this.storage[this.oldestIndex];
  this.oldestIndex++;
  return stored;
};

Queue.prototype.size = function(){
  return this.newestIndex - this.oldestIndex > 0 ? this.newestIndex - this.oldestIndex : 0;
};

var someInstance = new Queue();


