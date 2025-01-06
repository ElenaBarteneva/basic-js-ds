const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.origin = null;
  }

  root() {
    return this.origin;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.origin === null) {
      this.origin = newNode;
    } else {
      let current = this.origin;
      while (current) {
        if (data < current.data) {
          if (current.left === null) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }
    }
  }

  has(data) {
    let current = this.origin;
    while (current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  find(data) {
    let current = this.origin;
    while (current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return current;
      }
    }
    return null;
  }

  remove(data) {
    this.origin = this.removeNode(this.origin, data);
  }

  removeNode(current, data) {
    if (current === null) return current;

    if (data === current.data) {
      if (current.left === null && current.right === null) return null;
      if (current.left === null) return current.right;
      if (current.right === null) return current.left;

      const smallest = this.findSmallest(current.right);
      current.data = smallest.data;
      current.right = this.removeNode(current.right, smallest.data);
      return current;
    } else if (data < current.data) {
      current.left = this.removeNode(current.left, data);
      return current;
    } else {
      current.right = this.removeNode(current.right, data);
      return current;
    }
  }

  findSmallest(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  min() {
    if (!this.origin) return null;
    let current = this.origin;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (!this.origin) return null;
    let current = this.origin;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};