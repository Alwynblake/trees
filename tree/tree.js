'use strict';

const Node = require('./node.js');

class BinaryTree {
  constructor(root) {
    this.root = root;
  }
}

const preOrder = (root) => {
// base case is if root is equal to null
  if (root === null) {
    return;
  }

//recursive case – PRE-ORDER (root,left,right)
  console.log(root.value);
  preOrder(root.left);
  preOrder(root.right);
};

const inOrder = (root) => {
  if (root === null) {
    return;
  }

  inOrder(root.left);
  console.log(root.value);
  inOrder(root.right);
};

const postOrder = (root) => {
  if (root === null) {
    return;
  }

  postOrder(root.left);
  postOrder(root.right);
  console.log(root.value);
};

  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);
  const five = new Node(5);

  one.left = two;
  one.right = three;
  three.left = four;
  three.right = five;

  const tree = new BinaryTree(one);
  preOrder(tree.root);
  inOrder(tree.root);
  postOrder(tree.root);

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(nodeToInsert) {

    if (!nodeToInsert) {
      throw new Error('Can not insert a null value');
    }

    if (!this.root) {
      this.root = nodeToInsert;
      return;
    }
// find place to insert -->
    let current = this.root;
    while (true) {
      if (nodeToInsert.value > current.value) {
        // continue to the right
        if (!current.right) {
          current.right = nodeToInsert;
          // complete the process
          return;
        }
        current = current.right;
      } else {
        // go to the left
        if (!current.left) {
          current.left = nodeToInsert;
          return;
        }
        current = current.left;
      }
    }
  }

  contains(value, Node = this.root) {
    if (!this.root) {
      throw new Error('This tree is empty');
    }
    if (value === Node.value) {
      return true;
    }  }
  }

// iterate through the tree:
// check for null and Provide base case to stop recursion.
    if (Node.left && value < Node.value) {

      return this.contains(value, Node.left);
    }
    else
      if (Node.right && value > Node.value) {
        return this.contains(value, Node.right);

      } else {
        return false;
    }
    const BST = new BinarySearchTree();
    BST.insert(new Node(10));
    BST.insert(new Node(15));
    BST.insert(new Node(5));
    BST.insert(new Node(7));
    console.log(BST);

    module.exports = BinaryTree;
