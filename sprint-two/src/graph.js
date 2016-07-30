// Instantiate a new graph
var Graph = function() {
  this.vertices = [];
  this.edges = [];

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !(this.vertices.indexOf(node)<0)
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.vertices.splice(this.vertices.indexOf(node), 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i][0] === fromNode && this.edges[i][1] === toNode || this.edges[i][1] === fromNode && this.edges[i][0] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var edge = [fromNode, toNode];
  this.edges.push(edge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // var toRemove = [fromNode, toNode];
  // var index = this.edges.indexOf(toRemove);
  var index;
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i][0] === fromNode && this.edges[i][1] === toNode || this.edges[i][1] === fromNode && this.edges[i][0] === toNode) {
      index = i;
    }
  }

  this.edges.splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.vertices.length; i++) {
    cb(this.vertices[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

 Add node: O(1)
 Contains: O(n)
 Remove: O(n)
 HasEdge: O(n)
 AddEdge: O(1)
 RemoveEdge: O(n)
 ForEachNode: O(n)


 */


