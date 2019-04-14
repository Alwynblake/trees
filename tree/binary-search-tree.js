'use strict';

const Node = require('./lib/node');

class BinarySearchTree {
  constructor(root = null) {
    this.root = new Node(root);
  }

  // contains(value, Node = this.root) {
  //   if (!this.root) {
  //     throw new Error('This tree is empty');
  //   }
  //   if (value === Node.value) {
  //     return true;
  //   }


  // iterate through the tree:
  // check for null and Provide base case to stop recursion.


  //   if (Node.left && value < Node.value) {

  //     return this.contains(value, Node.left);
  //   } if (Node.right && value > Node.value) {
  //     return this.contains(value, Node.right);
  //   }
  //   return false;
  // }


  insert(value) {
    let node = this.root;

    if (!value) {
      throw new Error('Can not insert a null value');
    }

    if (node.value === null) {
      this.root = new Node(value);
      console.log(node);
      return;
    }

    let _insert = (node) => {

      if (value < node.value) {

        if (node.left === null) {
          node.left = new Node(value);
          return;

        }
        else if (node.left !== null) {
          return _insert(node.left);
        }

      } else if (value > node.value) {

        if (node.right === null) {
          node.right = new Node(value);
          return;
        } else if (node.right !== null) {
          return _insert(node.right);
        }

      } else {
        return null;
      }
    }

    _insert(node);
  }
}

module.exports = BinarySearchTree;
