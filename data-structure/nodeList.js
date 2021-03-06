//链表节点
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

//链表
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  //追加元素
  append(element) {
    const node = new Node(element);
    let current = null;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
  size() {
    return this.length;
  }
}

const linkList = new LinkedList();
console.log(linkList);
linkList.append(2);
linkList.append(6);
console.log(linkList);
console.log(linkList.size());