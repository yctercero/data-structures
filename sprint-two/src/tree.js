var Tree = function(value) {

  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.found = false;
  newTree.parent = null;

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);

  child.parent = this;
  this.children.push(child);
  console.log(this);
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

treeMethods.removeFromParent = function(){
  var index;

  for (var i = 0; i < this.parent.children.length; i++) {
    if( this.parent.children[i] === this ){
      index = i;
    }
  }
  console.log(this.parent.children);

  this.parent.children.splice(index, 1);
  console.log(this.parent.children);
  debugger;
  this.parent = null;
};



/*
 * Complexity: What is the time complexity of the above functions?

AddChild: O(1)
Contains: O(n)

 */
