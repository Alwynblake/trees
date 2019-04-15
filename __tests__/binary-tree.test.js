'use strict';

const BinaryTree = require('../tree/binary-tree');
const Node = require('../tree/lib/node');

describe('Testing BinaryTree preOrder method', () => {
  test('Testing that BT preOrder method can traverse a Binary Tree preOrder', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    const binaryTree = new BinaryTree();
    binaryTree.preOrder(one);
    expect(binaryTree.values).toEqual([1, 2, 3, 4, 5]);
  });

  test('Testing that BT inOrder method can traverse a Binary Tree inOrder', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    const binaryTree = new BinaryTree();
    binaryTree.inOrder(one);
    expect(binaryTree.values).toEqual([2, 1, 4, 3, 5]);
  });

  test('Testing that BT postOrder method can traverse a Binary Tree postOrder', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    const binaryTree = new BinaryTree();
    binaryTree.postOrder(one);
    expect(binaryTree.values).toEqual([2, 4, 5, 3, 1]);
  });
});
