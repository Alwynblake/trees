'use strict';

const BinarySearchTree = require('../tree/binary-search-tree');

describe('BinarySearchTree Class', () => {
  test('Testing that a new BST instance will insert a value at the root if instantiated with that value', () => {
    const bst = new BinarySearchTree(3);
    expect(bst.root.value).toEqual(3);
  });
  test('Testing that the BST insert method inserts a node at the root if the root is null', () => {
    const bst = new BinarySearchTree();
    bst.insert(10);
    expect(bst.root.value).toEqual(10);
  });
  test('Testing that BST insert method throws an error if it is not passed a value', () => {
    const bst = new BinarySearchTree(3);
    expect(() => {
      bst.insert();
    }).toThrow();
  });
  test('Testing that the BST insert method inserts a node to the left of the root node if the value is less than the root value', () => {
    const bst = new BinarySearchTree(10);
    bst.insert(8);
    expect(bst.root.left.value).toEqual(8);
  });
  test('Testing that the BST insert method inserts a node to the right of the root node if the value is greater than the root value', () => {
    const bst = new BinarySearchTree(10);
    bst.insert(12);
    bst.insert(15);
    expect(bst.root.right.value).toEqual(12);
    expect(bst.root.right.right.value).toEqual(15);
  });
});


