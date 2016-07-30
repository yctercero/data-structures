

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  var bucket;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  if (bucket === undefined) {
    bucket = [];
    bucket.push([k,v]);

  } else {

      for (var i = 0; i < bucket.length; i++) {

        if (bucket[i][0] === k) {
          bucket[i][1] = v;
        } else if(bucket[i][0] !== k && i === bucket.length - 1){
          bucket.push([k, v]);
        }
      }
  }

  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var tuple;

  for (var i = 0; i < bucket.length; i++) {
    if(bucket[i][0] === k){
      tuple = i;
    }
  }

  return bucket[tuple] === undefined ? undefined : bucket[tuple][1];

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var tuple;

  for (var i = 0; i < bucket.length; i++) {
    if(bucket[i][0] === k){
      tuple = i;
    }
  }

  bucket.splice(tuple, 1);
  this._storage.set(index, bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


