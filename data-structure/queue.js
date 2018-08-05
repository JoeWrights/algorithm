class Queue {
  constructor(items) {
    this.items = items || [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  //队头
  front() {
    return this.items[0];
  }
  //队尾
  tail() {
    return this.items[this.items.length -1];
  }
  get size() {
    return this.items.length;
  }
  get isEmpty() {
    return !this.items.length;
  }
  clear() {
    this.items = [];
  }
  get size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString()); 
  }
}

const queue = new Queue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.print(); //2,3,4
queue.dequeue();
queue.print();  //3,4


