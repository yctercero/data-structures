var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var lastNode;

  list.addToTail = function(value) {

    var currentNode = Node(value);

    if(list.head === null){
      list.head = currentNode;
      list.tail = currentNode;
    } else{
      lastNode = list.tail;
      list.tail = currentNode;
      lastNode.next = list.tail;
    }
  };

  list.removeHead = function() {
    var storage = list.head.next;
    var formerHead = list.head.value;

    delete list.head;
    list.head = storage;
    return formerHead;
  };

  list.contains = function(target) {
    var searchNode = function(target, node){
      if(node.value === target){
        return true;
      } else if(node.next === null){
        return false;
      } else {
        return searchNode(target, node.next);
      };
    };
    return searchNode(target, list.head);
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


