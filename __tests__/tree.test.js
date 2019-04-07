'use strict';

const BinaryTree  = require('../tree/tree.js');

describe('Testing tree method', () => {

  test('Testing that tree method can successfully instantiate an empty tree', () => {
    const binaryTree = new BinaryTree();
    // can successfully instantiate an empty tree
    binaryTree.insert(20);
    expect(binaryTree.root).toEqual(10);
  });
}






