'use strict';

const Node = require('./lib/node');
const BinaryTree = require('.lib/binarytree');

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

