var Tree = function(value) {

  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.found = false;

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if(this.value === target){
    this.found = true;
  }
  for (var i = 0; i < this.children.length; i++) {
    return this.children[i].contains(target);
  }
  return this.found;
};



/*
 * Complexity: What is the time complexity of the above functions?

AddChild: O(1)
Contains: O(n)

 */
