"use strict";
// This linked list implementation contains numbers as the type of node values.
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            return this.size;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.add = function (value) {
        this.size += 1;
        if (!this.tail) {
            this.head = this.tail = new Node(value);
            return;
        }
        var oldTail = this.tail;
        this.tail = new Node(value);
        oldTail.next = this.tail;
        return;
    };
    LinkedList.prototype.at = function (index) {
        if (index > this.size - 1 || !this.head)
            throw new Error('Index out of bounds');
        var node = this.head;
        var listIdx = 0;
        while (node) {
            if (listIdx === index) {
                return node;
            }
            listIdx++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head)
            throw new Error('List is empty');
        return this.at(leftIndex).value > this.at(rightIndex).value;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        var leftNodeValue = leftNode.value;
        leftNode.value = rightNode.value;
        rightNode.value = leftNodeValue;
    };
    LinkedList.prototype.print = function () {
        if (!this.head)
            return;
        var node = this.head;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
