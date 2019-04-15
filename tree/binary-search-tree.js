'use strict';

const Node = require('./lib/node');

class BinarySearchTree {
  constructor(root = null) {
    this.root = new Node(root);
  }

  insert(value) {
    const node = this.root;

    if (!value) {
      throw new Error('Can not insert a null value');
    }

    if (node.value === null) {
      this.root = new Node(value);
      return;
    }

    const _insert = (nodeToInsert) => { // eslint-disable-line
      if (value < nodeToInsert.value) {
        if (nodeToInsert.left === null) {
          nodeToInsert.left = new Node(value);
        } else if (nodeToInsert.left !== null) {
          return _insert(nodeToInsert.left);
        }
      } else if (value > nodeToInsert.value) {
        if (nodeToInsert.right === null) {
          nodeToInsert.right = new Node(value);
        } else if (nodeToInsert.right !== null) {
          return _insert(nodeToInsert.right);
        }
      } else {
        return null;
      }
    };

    _insert(node);
  }

  contains(value, node = this.root) {
    let valueToBeReturned = false;

    if (node.value === null) {
      throw new Error('This tree is empty');
    }
    if (value === undefined) {
      throw new Error('You must call this method with a value');
    }
    if (value === node.value) {
      valueToBeReturned = true;
    } else if (value < node.value) {
      return this.contains(value, node.left);
    } else if (value > node.value) {
      return this.contains(value, node.right);
    } else {
      valueToBeReturned = false;
    }
    return valueToBeReturned;
  }
}

module.exports = BinarySearchTree;
