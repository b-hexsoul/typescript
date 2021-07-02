// This linked list implementation contains numbers as the type of node values.

class Node {
  next: Node | null = null;

  constructor(public value: number) {}
}

export class LinkedList {
  size: number = 0
  head: Node | null = null;
  tail: Node | null = null;

  get length(): number {
    return this.size
  }

  add(value: number): void {
    this.size += 1
    if (!this.tail) {
      this.head = this.tail = new Node(value)
      return;
    }

    const oldTail = this.tail
    this.tail = new Node(value)
    oldTail.next = this.tail

    return;
  }

  at(index: number): Node {
    if (index > this.size - 1 || !this.head) throw new Error('Index out of bounds');
    let node: Node | null = this.head
    let listIdx = 0;

    while (node) {
      if ( listIdx === index) {
        return node
      }

      listIdx++
      node = node.next
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) throw new Error('List is empty')

    return this.at(leftIndex).value > this.at(rightIndex).value
  }

  swap(leftIndex: number, rightIndex: number): void {
    let leftNode = this.at(leftIndex)
    let rightNode = this.at(rightIndex)
    let leftNodeValue = leftNode.value

    leftNode.value = rightNode.value
    rightNode.value = leftNodeValue
  }

  print(): void {
    if (!this.head) return;

    let node: Node | null = this.head;
    while(node) {
      console.log(node.value)
      node = node.next
    }
  }
}