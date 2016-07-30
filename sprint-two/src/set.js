var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = "";
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage += JSON.stringify(item);
};

setPrototype.contains = function(item) {
  var itemString = JSON.stringify(item);
  var length = itemString.length;
  var index = this._storage.indexOf(itemString);
  var newItem = this._storage.slice(index, index+length);


  if( index < 0 ){
    return false;
  } else {
    return true;
  }
};

setPrototype.remove = function(item) {
  var itemString = JSON.stringify(item);
  var length = itemString.length;
  var index = this._storage.indexOf(itemString);
  var slice1 = this._storage.slice(0, index);
  var slice2 = this._storage.slice(index + length);
  this._storage = slice1 + slice2;

};

/*
 * Complexity: What is the time complexity of the above functions?
Add: O(1)

Contains: O(n).

Remove: O(n).
 */
