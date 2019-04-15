'use strict';

const Node = require('./lib/node');

class BinaryTree {
  constructor(root = null) {
    this.root = new Node(root);
    this.values = [];
  }

  preOrder(root) {
    // base case is if root is equal to null
    if (root === null) {
      return;
    }

    // recursive case – PRE-ORDER (root,left,right) 
    this.values.push(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  inOrder(root) {
    if (root === null) {
      return;
    }

    this.inOrder(root.left);
    this.values.push(root.value);
    this.inOrder(root.right);
  }

  postOrder(root) {
    if (root === null) {
      return;
    }

    this.postOrder(root.left);
    this.postOrder(root.right);
    this.values.push(root.value);
  }
}

module.exports = BinaryTree;
