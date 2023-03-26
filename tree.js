class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}


class Tree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value < current.value) {
                    if (!current.left) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else if (value > current.value) {
                    if (!current.right) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                } else {
                    return this;
                }
            }
        }
    }

}

const tree = new Tree;
tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(2);
tree.insert(1);

console.log(tree.root);
console.log(tree.root.right);
console.log(tree.root.left);

tree.dfsPre()