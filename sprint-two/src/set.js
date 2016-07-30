var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage += " " + item;
};

setPrototype.contains = function(item) {
  if( this._storage.indexOf(item) < 0 ){
    return false;
  }else{
    return true;
  }
};

setPrototype.remove = function(item) {
  var index = this._storage.indexOf(item);
  var slice1 = this._storage.slice(0, index - 1);
  var slice2 = this._storage.slice(index + item.length);

  this._storage = slice1 + slice2;
};

/*
 * Complexity: What is the time complexity of the above functions?
Add: O(1)

Contains: O(n).

Remove: O(n).
 */
