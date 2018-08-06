// 链表结点
// []内存分配给我们一定的数量的空间
//存储空间的连续性问题 灵活性不够  指针
// a[10] = [1, 2, 3, 4, 5, 6, 7];
// 1 value  1001
//next 指针，指向下一个结点的位置

export default class LinkedListNode {
  // data collections data node
  // linked
  // list 
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}